# `magicWanIpsecTunnel` Submodule <a name="`magicWanIpsecTunnel` Submodule" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanIpsecTunnel <a name="MagicWanIpsecTunnel" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel cloudflare_magic_wan_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnel(
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
  cloudflare_endpoint: str,
  interface_address: str,
  name: str,
  automatic_return_routing: bool | IResolvable = None,
  bgp: MagicWanIpsecTunnelBgp = None,
  customer_endpoint: str = None,
  custom_remote_identities: MagicWanIpsecTunnelCustomRemoteIdentities = None,
  description: str = None,
  health_check: MagicWanIpsecTunnelHealthCheck = None,
  interface_address6: str = None,
  psk: str = None,
  replay_protection: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.cloudflareEndpoint">cloudflare_endpoint</a></code> | <code>str</code> | The IP address assigned to the Cloudflare side of the IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.interfaceAddress">interface_address</a></code> | <code>str</code> | A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the IPsec tunnel. The name cannot share a name with other tunnels. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.automaticReturnRouting">automatic_return_routing</a></code> | <code>bool \| cdktn.IResolvable</code> | True if automatic stateful return routing should be enabled for a tunnel, false otherwise. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.bgp">bgp</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#bgp MagicWanIpsecTunnel#bgp}. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.customerEndpoint">customer_endpoint</a></code> | <code>str</code> | The IP address assigned to the customer side of the IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.customRemoteIdentities">custom_remote_identities</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#custom_remote_identities MagicWanIpsecTunnel#custom_remote_identities}. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description forthe IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.healthCheck">health_check</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.interfaceAddress6">interface_address6</a></code> | <code>str</code> | A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.psk">psk</a></code> | <code>str</code> | A randomly generated or provided string for use in the IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.replayProtection">replay_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#account_id MagicWanIpsecTunnel#account_id}

---

##### `cloudflare_endpoint`<sup>Required</sup> <a name="cloudflare_endpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.cloudflareEndpoint"></a>

- *Type:* str

The IP address assigned to the Cloudflare side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#cloudflare_endpoint MagicWanIpsecTunnel#cloudflare_endpoint}

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.interfaceAddress"></a>

- *Type:* str

A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel.

Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#interface_address MagicWanIpsecTunnel#interface_address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.name"></a>

- *Type:* str

The name of the IPsec tunnel. The name cannot share a name with other tunnels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#name MagicWanIpsecTunnel#name}

---

##### `automatic_return_routing`<sup>Optional</sup> <a name="automatic_return_routing" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.automaticReturnRouting"></a>

- *Type:* bool | cdktn.IResolvable

True if automatic stateful return routing should be enabled for a tunnel, false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#automatic_return_routing MagicWanIpsecTunnel#automatic_return_routing}

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.bgp"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#bgp MagicWanIpsecTunnel#bgp}.

---

##### `customer_endpoint`<sup>Optional</sup> <a name="customer_endpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.customerEndpoint"></a>

- *Type:* str

The IP address assigned to the customer side of the IPsec tunnel.

Not required, but must be set for proactive traceroutes to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#customer_endpoint MagicWanIpsecTunnel#customer_endpoint}

---

##### `custom_remote_identities`<sup>Optional</sup> <a name="custom_remote_identities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.customRemoteIdentities"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#custom_remote_identities MagicWanIpsecTunnel#custom_remote_identities}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.description"></a>

- *Type:* str

An optional description forthe IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#description MagicWanIpsecTunnel#description}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}.

---

##### `interface_address6`<sup>Optional</sup> <a name="interface_address6" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.interfaceAddress6"></a>

- *Type:* str

A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6.

Eg if virtual_subnet6 is 2606:54c1:7:0:a9fe:12d2::/127 , interface_address6 could be 2606:54c1:7:0:a9fe:12d2:1:200/127

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#interface_address6 MagicWanIpsecTunnel#interface_address6}

---

##### `psk`<sup>Optional</sup> <a name="psk" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.psk"></a>

- *Type:* str

A randomly generated or provided string for use in the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#psk MagicWanIpsecTunnel#psk}

---

##### `replay_protection`<sup>Optional</sup> <a name="replay_protection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.Initializer.parameter.replayProtection"></a>

- *Type:* bool | cdktn.IResolvable

If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#replay_protection MagicWanIpsecTunnel#replay_protection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putBgp">put_bgp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putCustomRemoteIdentities">put_custom_remote_identities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck">put_health_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetAutomaticReturnRouting">reset_automatic_return_routing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetBgp">reset_bgp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomerEndpoint">reset_customer_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomRemoteIdentities">reset_custom_remote_identities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheck">reset_health_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetInterfaceAddress6">reset_interface_address6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetPsk">reset_psk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetReplayProtection">reset_replay_protection</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bgp` <a name="put_bgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putBgp"></a>

```python
def put_bgp(
  customer_asn: typing.Union[int, float],
  extra_prefixes: typing.List[str] = None,
  md5_key: str = None
) -> None
```

###### `customer_asn`<sup>Required</sup> <a name="customer_asn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putBgp.parameter.customerAsn"></a>

- *Type:* typing.Union[int, float]

ASN used on the customer end of the BGP session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#customer_asn MagicWanIpsecTunnel#customer_asn}

---

###### `extra_prefixes`<sup>Optional</sup> <a name="extra_prefixes" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putBgp.parameter.extraPrefixes"></a>

- *Type:* typing.List[str]

Prefixes in this list will be advertised to the customer device, in addition to the routes in the Magic routing table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#extra_prefixes MagicWanIpsecTunnel#extra_prefixes}

---

###### `md5_key`<sup>Optional</sup> <a name="md5_key" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putBgp.parameter.md5Key"></a>

- *Type:* str

MD5 key to use for session authentication.

Note that *this is not a security measure*. MD5 is not a valid security mechanism, and the
key is not treated as a secret value. This is *only* supported for preventing
misconfiguration, not for defending against malicious attacks.

The MD5 key, if set, must be of non-zero length and consist only of the following types of
character:

* ASCII alphanumerics: `[a-zA-Z0-9]`
* Special characters in the set `'!@#$%^&*()+[]{}<>/.,;:_-~`= |`

In other words, MD5 keys may contain any printable ASCII character aside from newline (0x0A),
quotation mark (`"`), vertical tab (0x0B), carriage return (0x0D), tab (0x09), form feed
(0x0C), and the question mark (`?`). Requests specifying an MD5 key with one or more of
these disallowed characters will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#md5_key MagicWanIpsecTunnel#md5_key}

---

##### `put_custom_remote_identities` <a name="put_custom_remote_identities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putCustomRemoteIdentities"></a>

```python
def put_custom_remote_identities(
  fqdn_id: str = None
) -> None
```

###### `fqdn_id`<sup>Optional</sup> <a name="fqdn_id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putCustomRemoteIdentities.parameter.fqdnId"></a>

- *Type:* str

A custom IKE ID of type FQDN that may be used to identity the IPsec tunnel.

The
generated IKE IDs can still be used even if this custom value is specified.

Must be of the form `<custom label>.<account ID>.custom.ipsec.cloudflare.com`.

This custom ID does not need to be unique. Two IPsec tunnels may have the same custom
fqdn_id. However, if another IPsec tunnel has the same value then the two tunnels
cannot have the same cloudflare_endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#fqdn_id MagicWanIpsecTunnel#fqdn_id}

---

##### `put_health_check` <a name="put_health_check" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck"></a>

```python
def put_health_check(
  direction: str = None,
  enabled: bool | IResolvable = None,
  rate: str = None,
  target: MagicWanIpsecTunnelHealthCheckTarget = None,
  type: str = None
) -> None
```

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck.parameter.direction"></a>

- *Type:* str

The direction of the flow of the healthcheck.

Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
Available values: "unidirectional", "bidirectional".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#direction MagicWanIpsecTunnel#direction}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Determines whether to run healthchecks for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#enabled MagicWanIpsecTunnel#enabled}

---

###### `rate`<sup>Optional</sup> <a name="rate" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck.parameter.rate"></a>

- *Type:* str

How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#rate MagicWanIpsecTunnel#rate}

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck.parameter.target"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>

The destination address in a request type health check.

After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#target MagicWanIpsecTunnel#target}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.putHealthCheck.parameter.type"></a>

- *Type:* str

The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#type MagicWanIpsecTunnel#type}

---

##### `reset_automatic_return_routing` <a name="reset_automatic_return_routing" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetAutomaticReturnRouting"></a>

```python
def reset_automatic_return_routing() -> None
```

##### `reset_bgp` <a name="reset_bgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetBgp"></a>

```python
def reset_bgp() -> None
```

##### `reset_customer_endpoint` <a name="reset_customer_endpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomerEndpoint"></a>

```python
def reset_customer_endpoint() -> None
```

##### `reset_custom_remote_identities` <a name="reset_custom_remote_identities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetCustomRemoteIdentities"></a>

```python
def reset_custom_remote_identities() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_health_check` <a name="reset_health_check" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```

##### `reset_interface_address6` <a name="reset_interface_address6" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetInterfaceAddress6"></a>

```python
def reset_interface_address6() -> None
```

##### `reset_psk` <a name="reset_psk" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetPsk"></a>

```python
def reset_psk() -> None
```

##### `reset_replay_protection` <a name="reset_replay_protection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.resetReplayProtection"></a>

```python
def reset_replay_protection() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MagicWanIpsecTunnel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MagicWanIpsecTunnel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MagicWanIpsecTunnel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MagicWanIpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MagicWanIpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.allowNullCipher">allow_null_cipher</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgp">bgp</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference">MagicWanIpsecTunnelBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgpStatus">bgp_status</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference">MagicWanIpsecTunnelBgpStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customRemoteIdentities">custom_remote_identities</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference">MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheck">health_check</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskMetadata">psk_metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference">MagicWanIpsecTunnelPskMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.automaticReturnRoutingInput">automatic_return_routing_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgpInput">bgp_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpointInput">cloudflare_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpointInput">customer_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customRemoteIdentitiesInput">custom_remote_identities_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckInput">health_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress6Input">interface_address6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddressInput">interface_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskInput">psk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtectionInput">replay_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.automaticReturnRouting">automatic_return_routing</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpoint">cloudflare_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpoint">customer_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress">interface_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress6">interface_address6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.psk">psk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtection">replay_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allow_null_cipher`<sup>Required</sup> <a name="allow_null_cipher" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.allowNullCipher"></a>

```python
allow_null_cipher: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `bgp`<sup>Required</sup> <a name="bgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgp"></a>

```python
bgp: MagicWanIpsecTunnelBgpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference">MagicWanIpsecTunnelBgpOutputReference</a>

---

##### `bgp_status`<sup>Required</sup> <a name="bgp_status" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgpStatus"></a>

```python
bgp_status: MagicWanIpsecTunnelBgpStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference">MagicWanIpsecTunnelBgpStatusOutputReference</a>

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `custom_remote_identities`<sup>Required</sup> <a name="custom_remote_identities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customRemoteIdentities"></a>

```python
custom_remote_identities: MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference">MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference</a>

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheck"></a>

```python
health_check: MagicWanIpsecTunnelHealthCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference">MagicWanIpsecTunnelHealthCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `psk_metadata`<sup>Required</sup> <a name="psk_metadata" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskMetadata"></a>

```python
psk_metadata: MagicWanIpsecTunnelPskMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference">MagicWanIpsecTunnelPskMetadataOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `automatic_return_routing_input`<sup>Optional</sup> <a name="automatic_return_routing_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.automaticReturnRoutingInput"></a>

```python
automatic_return_routing_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bgp_input`<sup>Optional</sup> <a name="bgp_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.bgpInput"></a>

```python
bgp_input: IResolvable | MagicWanIpsecTunnelBgp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a>

---

##### `cloudflare_endpoint_input`<sup>Optional</sup> <a name="cloudflare_endpoint_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpointInput"></a>

```python
cloudflare_endpoint_input: str
```

- *Type:* str

---

##### `customer_endpoint_input`<sup>Optional</sup> <a name="customer_endpoint_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpointInput"></a>

```python
customer_endpoint_input: str
```

- *Type:* str

---

##### `custom_remote_identities_input`<sup>Optional</sup> <a name="custom_remote_identities_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customRemoteIdentitiesInput"></a>

```python
custom_remote_identities_input: IResolvable | MagicWanIpsecTunnelCustomRemoteIdentities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.healthCheckInput"></a>

```python
health_check_input: IResolvable | MagicWanIpsecTunnelHealthCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>

---

##### `interface_address6_input`<sup>Optional</sup> <a name="interface_address6_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress6Input"></a>

```python
interface_address6_input: str
```

- *Type:* str

---

##### `interface_address_input`<sup>Optional</sup> <a name="interface_address_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddressInput"></a>

```python
interface_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `psk_input`<sup>Optional</sup> <a name="psk_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.pskInput"></a>

```python
psk_input: str
```

- *Type:* str

---

##### `replay_protection_input`<sup>Optional</sup> <a name="replay_protection_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtectionInput"></a>

```python
replay_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `automatic_return_routing`<sup>Required</sup> <a name="automatic_return_routing" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.automaticReturnRouting"></a>

```python
automatic_return_routing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cloudflare_endpoint`<sup>Required</sup> <a name="cloudflare_endpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.cloudflareEndpoint"></a>

```python
cloudflare_endpoint: str
```

- *Type:* str

---

##### `customer_endpoint`<sup>Required</sup> <a name="customer_endpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.customerEndpoint"></a>

```python
customer_endpoint: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress"></a>

```python
interface_address: str
```

- *Type:* str

---

##### `interface_address6`<sup>Required</sup> <a name="interface_address6" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.interfaceAddress6"></a>

```python
interface_address6: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `psk`<sup>Required</sup> <a name="psk" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.psk"></a>

```python
psk: str
```

- *Type:* str

---

##### `replay_protection`<sup>Required</sup> <a name="replay_protection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.replayProtection"></a>

```python
replay_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MagicWanIpsecTunnelBgp <a name="MagicWanIpsecTunnelBgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelBgp(
  customer_asn: typing.Union[int, float],
  extra_prefixes: typing.List[str] = None,
  md5_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.customerAsn">customer_asn</a></code> | <code>typing.Union[int, float]</code> | ASN used on the customer end of the BGP session. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.extraPrefixes">extra_prefixes</a></code> | <code>typing.List[str]</code> | Prefixes in this list will be advertised to the customer device, in addition to the routes in the Magic routing table. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.md5Key">md5_key</a></code> | <code>str</code> | MD5 key to use for session authentication. |

---

##### `customer_asn`<sup>Required</sup> <a name="customer_asn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.customerAsn"></a>

```python
customer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

ASN used on the customer end of the BGP session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#customer_asn MagicWanIpsecTunnel#customer_asn}

---

##### `extra_prefixes`<sup>Optional</sup> <a name="extra_prefixes" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.extraPrefixes"></a>

```python
extra_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Prefixes in this list will be advertised to the customer device, in addition to the routes in the Magic routing table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#extra_prefixes MagicWanIpsecTunnel#extra_prefixes}

---

##### `md5_key`<sup>Optional</sup> <a name="md5_key" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp.property.md5Key"></a>

```python
md5_key: str
```

- *Type:* str

MD5 key to use for session authentication.

Note that *this is not a security measure*. MD5 is not a valid security mechanism, and the
key is not treated as a secret value. This is *only* supported for preventing
misconfiguration, not for defending against malicious attacks.

The MD5 key, if set, must be of non-zero length and consist only of the following types of
character:

* ASCII alphanumerics: `[a-zA-Z0-9]`
* Special characters in the set `'!@#$%^&*()+[]{}<>/.,;:_-~`= |`

In other words, MD5 keys may contain any printable ASCII character aside from newline (0x0A),
quotation mark (`"`), vertical tab (0x0B), carriage return (0x0D), tab (0x09), form feed
(0x0C), and the question mark (`?`). Requests specifying an MD5 key with one or more of
these disallowed characters will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#md5_key MagicWanIpsecTunnel#md5_key}

---

### MagicWanIpsecTunnelBgpStatus <a name="MagicWanIpsecTunnelBgpStatus" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatus.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatus()
```


### MagicWanIpsecTunnelConfig <a name="MagicWanIpsecTunnelConfig" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  cloudflare_endpoint: str,
  interface_address: str,
  name: str,
  automatic_return_routing: bool | IResolvable = None,
  bgp: MagicWanIpsecTunnelBgp = None,
  customer_endpoint: str = None,
  custom_remote_identities: MagicWanIpsecTunnelCustomRemoteIdentities = None,
  description: str = None,
  health_check: MagicWanIpsecTunnelHealthCheck = None,
  interface_address6: str = None,
  psk: str = None,
  replay_protection: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.cloudflareEndpoint">cloudflare_endpoint</a></code> | <code>str</code> | The IP address assigned to the Cloudflare side of the IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress">interface_address</a></code> | <code>str</code> | A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.name">name</a></code> | <code>str</code> | The name of the IPsec tunnel. The name cannot share a name with other tunnels. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.automaticReturnRouting">automatic_return_routing</a></code> | <code>bool \| cdktn.IResolvable</code> | True if automatic stateful return routing should be enabled for a tunnel, false otherwise. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.bgp">bgp</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#bgp MagicWanIpsecTunnel#bgp}. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customerEndpoint">customer_endpoint</a></code> | <code>str</code> | The IP address assigned to the customer side of the IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customRemoteIdentities">custom_remote_identities</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#custom_remote_identities MagicWanIpsecTunnel#custom_remote_identities}. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.description">description</a></code> | <code>str</code> | An optional description forthe IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheck">health_check</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress6">interface_address6</a></code> | <code>str</code> | A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.psk">psk</a></code> | <code>str</code> | A randomly generated or provided string for use in the IPsec tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.replayProtection">replay_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#account_id MagicWanIpsecTunnel#account_id}

---

##### `cloudflare_endpoint`<sup>Required</sup> <a name="cloudflare_endpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.cloudflareEndpoint"></a>

```python
cloudflare_endpoint: str
```

- *Type:* str

The IP address assigned to the Cloudflare side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#cloudflare_endpoint MagicWanIpsecTunnel#cloudflare_endpoint}

---

##### `interface_address`<sup>Required</sup> <a name="interface_address" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress"></a>

```python
interface_address: str
```

- *Type:* str

A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel.

Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#interface_address MagicWanIpsecTunnel#interface_address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the IPsec tunnel. The name cannot share a name with other tunnels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#name MagicWanIpsecTunnel#name}

---

##### `automatic_return_routing`<sup>Optional</sup> <a name="automatic_return_routing" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.automaticReturnRouting"></a>

```python
automatic_return_routing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if automatic stateful return routing should be enabled for a tunnel, false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#automatic_return_routing MagicWanIpsecTunnel#automatic_return_routing}

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.bgp"></a>

```python
bgp: MagicWanIpsecTunnelBgp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#bgp MagicWanIpsecTunnel#bgp}.

---

##### `customer_endpoint`<sup>Optional</sup> <a name="customer_endpoint" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customerEndpoint"></a>

```python
customer_endpoint: str
```

- *Type:* str

The IP address assigned to the customer side of the IPsec tunnel.

Not required, but must be set for proactive traceroutes to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#customer_endpoint MagicWanIpsecTunnel#customer_endpoint}

---

##### `custom_remote_identities`<sup>Optional</sup> <a name="custom_remote_identities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.customRemoteIdentities"></a>

```python
custom_remote_identities: MagicWanIpsecTunnelCustomRemoteIdentities
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#custom_remote_identities MagicWanIpsecTunnel#custom_remote_identities}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description forthe IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#description MagicWanIpsecTunnel#description}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.healthCheck"></a>

```python
health_check: MagicWanIpsecTunnelHealthCheck
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#health_check MagicWanIpsecTunnel#health_check}.

---

##### `interface_address6`<sup>Optional</sup> <a name="interface_address6" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.interfaceAddress6"></a>

```python
interface_address6: str
```

- *Type:* str

A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6.

Eg if virtual_subnet6 is 2606:54c1:7:0:a9fe:12d2::/127 , interface_address6 could be 2606:54c1:7:0:a9fe:12d2:1:200/127

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#interface_address6 MagicWanIpsecTunnel#interface_address6}

---

##### `psk`<sup>Optional</sup> <a name="psk" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.psk"></a>

```python
psk: str
```

- *Type:* str

A randomly generated or provided string for use in the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#psk MagicWanIpsecTunnel#psk}

---

##### `replay_protection`<sup>Optional</sup> <a name="replay_protection" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelConfig.property.replayProtection"></a>

```python
replay_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If `true`, then IPsec replay protection will be supported in the Cloudflare-to-customer direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#replay_protection MagicWanIpsecTunnel#replay_protection}

---

### MagicWanIpsecTunnelCustomRemoteIdentities <a name="MagicWanIpsecTunnelCustomRemoteIdentities" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities(
  fqdn_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities.property.fqdnId">fqdn_id</a></code> | <code>str</code> | A custom IKE ID of type FQDN that may be used to identity the IPsec tunnel. |

---

##### `fqdn_id`<sup>Optional</sup> <a name="fqdn_id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities.property.fqdnId"></a>

```python
fqdn_id: str
```

- *Type:* str

A custom IKE ID of type FQDN that may be used to identity the IPsec tunnel.

The
generated IKE IDs can still be used even if this custom value is specified.

Must be of the form `<custom label>.<account ID>.custom.ipsec.cloudflare.com`.

This custom ID does not need to be unique. Two IPsec tunnels may have the same custom
fqdn_id. However, if another IPsec tunnel has the same value then the two tunnels
cannot have the same cloudflare_endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#fqdn_id MagicWanIpsecTunnel#fqdn_id}

---

### MagicWanIpsecTunnelHealthCheck <a name="MagicWanIpsecTunnelHealthCheck" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck(
  direction: str = None,
  enabled: bool | IResolvable = None,
  rate: str = None,
  target: MagicWanIpsecTunnelHealthCheckTarget = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.direction">direction</a></code> | <code>str</code> | The direction of the flow of the healthcheck. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines whether to run healthchecks for a tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.rate">rate</a></code> | <code>str</code> | How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high". |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.target">target</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a></code> | The destination address in a request type health check. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.type">type</a></code> | <code>str</code> | The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request". |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.direction"></a>

```python
direction: str
```

- *Type:* str

The direction of the flow of the healthcheck.

Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
Available values: "unidirectional", "bidirectional".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#direction MagicWanIpsecTunnel#direction}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Determines whether to run healthchecks for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#enabled MagicWanIpsecTunnel#enabled}

---

##### `rate`<sup>Optional</sup> <a name="rate" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.rate"></a>

```python
rate: str
```

- *Type:* str

How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#rate MagicWanIpsecTunnel#rate}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.target"></a>

```python
target: MagicWanIpsecTunnelHealthCheckTarget
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>

The destination address in a request type health check.

After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#target MagicWanIpsecTunnel#target}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck.property.type"></a>

```python
type: str
```

- *Type:* str

The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#type MagicWanIpsecTunnel#type}

---

### MagicWanIpsecTunnelHealthCheckTarget <a name="MagicWanIpsecTunnelHealthCheckTarget" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget(
  saved: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget.property.saved">saved</a></code> | <code>str</code> | The saved health check target. |

---

##### `saved`<sup>Optional</sup> <a name="saved" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget.property.saved"></a>

```python
saved: str
```

- *Type:* str

The saved health check target.

Setting the value to the empty string indicates that the calculated default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#saved MagicWanIpsecTunnel#saved}

---

### MagicWanIpsecTunnelPskMetadata <a name="MagicWanIpsecTunnelPskMetadata" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadata.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadata()
```


## Classes <a name="Classes" id="Classes"></a>

### MagicWanIpsecTunnelBgpOutputReference <a name="MagicWanIpsecTunnelBgpOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resetExtraPrefixes">reset_extra_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resetMd5Key">reset_md5_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_extra_prefixes` <a name="reset_extra_prefixes" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resetExtraPrefixes"></a>

```python
def reset_extra_prefixes() -> None
```

##### `reset_md5_key` <a name="reset_md5_key" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.resetMd5Key"></a>

```python
def reset_md5_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.customerAsnInput">customer_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.extraPrefixesInput">extra_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.md5KeyInput">md5_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.customerAsn">customer_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.extraPrefixes">extra_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.md5Key">md5_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_asn_input`<sup>Optional</sup> <a name="customer_asn_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.customerAsnInput"></a>

```python
customer_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extra_prefixes_input`<sup>Optional</sup> <a name="extra_prefixes_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.extraPrefixesInput"></a>

```python
extra_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `md5_key_input`<sup>Optional</sup> <a name="md5_key_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.md5KeyInput"></a>

```python
md5_key_input: str
```

- *Type:* str

---

##### `customer_asn`<sup>Required</sup> <a name="customer_asn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.customerAsn"></a>

```python
customer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extra_prefixes`<sup>Required</sup> <a name="extra_prefixes" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.extraPrefixes"></a>

```python
extra_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `md5_key`<sup>Required</sup> <a name="md5_key" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.md5Key"></a>

```python
md5_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MagicWanIpsecTunnelBgp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgp">MagicWanIpsecTunnelBgp</a>

---


### MagicWanIpsecTunnelBgpStatusOutputReference <a name="MagicWanIpsecTunnelBgpStatusOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.bgpState">bgp_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.cfSpeakerIp">cf_speaker_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.cfSpeakerPort">cf_speaker_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.customerSpeakerIp">customer_speaker_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.customerSpeakerPort">customer_speaker_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.tcpEstablished">tcp_established</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatus">MagicWanIpsecTunnelBgpStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bgp_state`<sup>Required</sup> <a name="bgp_state" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.bgpState"></a>

```python
bgp_state: str
```

- *Type:* str

---

##### `cf_speaker_ip`<sup>Required</sup> <a name="cf_speaker_ip" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.cfSpeakerIp"></a>

```python
cf_speaker_ip: str
```

- *Type:* str

---

##### `cf_speaker_port`<sup>Required</sup> <a name="cf_speaker_port" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.cfSpeakerPort"></a>

```python
cf_speaker_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_speaker_ip`<sup>Required</sup> <a name="customer_speaker_ip" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.customerSpeakerIp"></a>

```python
customer_speaker_ip: str
```

- *Type:* str

---

##### `customer_speaker_port`<sup>Required</sup> <a name="customer_speaker_port" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.customerSpeakerPort"></a>

```python
customer_speaker_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tcp_established`<sup>Required</sup> <a name="tcp_established" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.tcpEstablished"></a>

```python
tcp_established: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatusOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanIpsecTunnelBgpStatus
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelBgpStatus">MagicWanIpsecTunnelBgpStatus</a>

---


### MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference <a name="MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.resetFqdnId">reset_fqdn_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fqdn_id` <a name="reset_fqdn_id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.resetFqdnId"></a>

```python
def reset_fqdn_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqdnIdInput">fqdn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqdnId">fqdn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn_id_input`<sup>Optional</sup> <a name="fqdn_id_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqdnIdInput"></a>

```python
fqdn_id_input: str
```

- *Type:* str

---

##### `fqdn_id`<sup>Required</sup> <a name="fqdn_id" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.fqdnId"></a>

```python
fqdn_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentitiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MagicWanIpsecTunnelCustomRemoteIdentities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelCustomRemoteIdentities">MagicWanIpsecTunnelCustomRemoteIdentities</a>

---


### MagicWanIpsecTunnelHealthCheckOutputReference <a name="MagicWanIpsecTunnelHealthCheckOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetRate">reset_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target` <a name="put_target" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.putTarget"></a>

```python
def put_target(
  saved: str = None
) -> None
```

###### `saved`<sup>Optional</sup> <a name="saved" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.putTarget.parameter.saved"></a>

- *Type:* str

The saved health check target.

Setting the value to the empty string indicates that the calculated default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_wan_ipsec_tunnel#saved MagicWanIpsecTunnel#saved}

---

##### `reset_direction` <a name="reset_direction" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_rate` <a name="reset_rate" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetRate"></a>

```python
def reset_rate() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rateInput">rate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.targetInput">target_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rate">rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.target"></a>

```python
target: MagicWanIpsecTunnelHealthCheckTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference">MagicWanIpsecTunnelHealthCheckTargetOutputReference</a>

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `rate_input`<sup>Optional</sup> <a name="rate_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rateInput"></a>

```python
rate_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.targetInput"></a>

```python
target_input: IResolvable | MagicWanIpsecTunnelHealthCheckTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.rate"></a>

```python
rate: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MagicWanIpsecTunnelHealthCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheck">MagicWanIpsecTunnelHealthCheck</a>

---


### MagicWanIpsecTunnelHealthCheckTargetOutputReference <a name="MagicWanIpsecTunnelHealthCheckTargetOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resetSaved">reset_saved</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_saved` <a name="reset_saved" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.resetSaved"></a>

```python
def reset_saved() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.effective">effective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.savedInput">saved_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.saved">saved</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.effective"></a>

```python
effective: str
```

- *Type:* str

---

##### `saved_input`<sup>Optional</sup> <a name="saved_input" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.savedInput"></a>

```python
saved_input: str
```

- *Type:* str

---

##### `saved`<sup>Required</sup> <a name="saved" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.saved"></a>

```python
saved: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MagicWanIpsecTunnelHealthCheckTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelHealthCheckTarget">MagicWanIpsecTunnelHealthCheckTarget</a>

---


### MagicWanIpsecTunnelPskMetadataOutputReference <a name="MagicWanIpsecTunnelPskMetadataOutputReference" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import magic_wan_ipsec_tunnel

magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn">last_generated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadata">MagicWanIpsecTunnelPskMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_generated_on`<sup>Required</sup> <a name="last_generated_on" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.lastGeneratedOn"></a>

```python
last_generated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadataOutputReference.property.internalValue"></a>

```python
internal_value: MagicWanIpsecTunnelPskMetadata
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanIpsecTunnel.MagicWanIpsecTunnelPskMetadata">MagicWanIpsecTunnelPskMetadata</a>

---




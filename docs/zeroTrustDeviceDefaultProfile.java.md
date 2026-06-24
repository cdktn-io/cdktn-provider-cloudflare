# `zeroTrustDeviceDefaultProfile` Submodule <a name="`zeroTrustDeviceDefaultProfile` Submodule" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceDefaultProfile <a name="ZeroTrustDeviceDefaultProfile" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfile;

ZeroTrustDeviceDefaultProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .allowedToLeave(java.lang.Boolean|IResolvable)
//  .allowModeSwitch(java.lang.Boolean|IResolvable)
//  .allowUpdates(java.lang.Boolean|IResolvable)
//  .autoConnect(java.lang.Number)
//  .captivePortal(java.lang.Number)
//  .disableAutoFallback(java.lang.Boolean|IResolvable)
//  .dnsSearchSuffixes(IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileDnsSearchSuffixes>)
//  .exclude(IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileExclude>)
//  .excludeOfficeIps(java.lang.Boolean|IResolvable)
//  .include(IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileInclude>)
//  .lanAllowMinutes(java.lang.Number)
//  .lanAllowSubnetSize(java.lang.Number)
//  .registerInterfaceIpWithDns(java.lang.Boolean|IResolvable)
//  .sccmVpnBoundarySupport(java.lang.Boolean|IResolvable)
//  .serviceModeV2(ZeroTrustDeviceDefaultProfileServiceModeV2)
//  .supportUrl(java.lang.String)
//  .switchLocked(java.lang.Boolean|IResolvable)
//  .tunnelProtocol(java.lang.String)
//  .virtualNetworks(ZeroTrustDeviceDefaultProfileVirtualNetworks)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#account_id ZeroTrustDeviceDefaultProfile#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.allowedToLeave">allowedToLeave</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow devices to leave the organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.allowModeSwitch">allowModeSwitch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow the user to switch WARP between modes. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.allowUpdates">allowUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to receive update notifications when a new version of the client is available. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.autoConnect">autoConnect</a></code> | <code>java.lang.Number</code> | The amount of time in seconds to reconnect after having been disabled. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.captivePortal">captivePortal</a></code> | <code>java.lang.Number</code> | Turn on the captive portal after the specified amount of time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.disableAutoFallback">disableAutoFallback</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.dnsSearchSuffixes">dnsSearchSuffixes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes">ZeroTrustDeviceDefaultProfileDnsSearchSuffixes</a>></code> | List of DNS search suffixes to apply to clients. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.exclude">exclude</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>></code> | List of routes excluded in the WARP client's tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.excludeOfficeIps">excludeOfficeIps</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.include">include</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>></code> | List of routes included in the WARP client's tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.lanAllowMinutes">lanAllowMinutes</a></code> | <code>java.lang.Number</code> | The amount of time in minutes a user is allowed access to their LAN. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.lanAllowSubnetSize">lanAllowSubnetSize</a></code> | <code>java.lang.Number</code> | The size of the subnet for the local access network. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.registerInterfaceIpWithDns">registerInterfaceIpWithDns</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.sccmVpnBoundarySupport">sccmVpnBoundarySupport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. (Windows only). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#service_mode_v2 ZeroTrustDeviceDefaultProfile#service_mode_v2}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | The URL to launch when the Send Feedback button is clicked. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.switchLocked">switchLocked</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.tunnelProtocol">tunnelProtocol</a></code> | <code>java.lang.String</code> | Determines which tunnel protocol to use. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.virtualNetworks">virtualNetworks</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworks">ZeroTrustDeviceDefaultProfileVirtualNetworks</a></code> | Virtual network access settings for the device. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#account_id ZeroTrustDeviceDefaultProfile#account_id}.

---

##### `allowedToLeave`<sup>Optional</sup> <a name="allowedToLeave" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.allowedToLeave"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow devices to leave the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#allowed_to_leave ZeroTrustDeviceDefaultProfile#allowed_to_leave}

---

##### `allowModeSwitch`<sup>Optional</sup> <a name="allowModeSwitch" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.allowModeSwitch"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow the user to switch WARP between modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#allow_mode_switch ZeroTrustDeviceDefaultProfile#allow_mode_switch}

---

##### `allowUpdates`<sup>Optional</sup> <a name="allowUpdates" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.allowUpdates"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to receive update notifications when a new version of the client is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#allow_updates ZeroTrustDeviceDefaultProfile#allow_updates}

---

##### `autoConnect`<sup>Optional</sup> <a name="autoConnect" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.autoConnect"></a>

- *Type:* java.lang.Number

The amount of time in seconds to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#auto_connect ZeroTrustDeviceDefaultProfile#auto_connect}

---

##### `captivePortal`<sup>Optional</sup> <a name="captivePortal" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.captivePortal"></a>

- *Type:* java.lang.Number

Turn on the captive portal after the specified amount of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#captive_portal ZeroTrustDeviceDefaultProfile#captive_portal}

---

##### `disableAutoFallback`<sup>Optional</sup> <a name="disableAutoFallback" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.disableAutoFallback"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#disable_auto_fallback ZeroTrustDeviceDefaultProfile#disable_auto_fallback}

---

##### `dnsSearchSuffixes`<sup>Optional</sup> <a name="dnsSearchSuffixes" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.dnsSearchSuffixes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes">ZeroTrustDeviceDefaultProfileDnsSearchSuffixes</a>>

List of DNS search suffixes to apply to clients.

Suffixes are evaluated in order. Use an empty array to clear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#dns_search_suffixes ZeroTrustDeviceDefaultProfile#dns_search_suffixes}

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.exclude"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>>

List of routes excluded in the WARP client's tunnel.

Both 'exclude' and 'include' cannot be set in the same request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#exclude ZeroTrustDeviceDefaultProfile#exclude}

---

##### `excludeOfficeIps`<sup>Optional</sup> <a name="excludeOfficeIps" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.excludeOfficeIps"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to add Microsoft IPs to Split Tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#exclude_office_ips ZeroTrustDeviceDefaultProfile#exclude_office_ips}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.include"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>>

List of routes included in the WARP client's tunnel.

Both 'exclude' and 'include' cannot be set in the same request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#include ZeroTrustDeviceDefaultProfile#include}

---

##### `lanAllowMinutes`<sup>Optional</sup> <a name="lanAllowMinutes" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.lanAllowMinutes"></a>

- *Type:* java.lang.Number

The amount of time in minutes a user is allowed access to their LAN.

A value of 0 will allow LAN access until the next WARP reconnection, such as a reboot or a laptop waking from sleep. Note that this field is omitted from the response if null or unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#lan_allow_minutes ZeroTrustDeviceDefaultProfile#lan_allow_minutes}

---

##### `lanAllowSubnetSize`<sup>Optional</sup> <a name="lanAllowSubnetSize" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.lanAllowSubnetSize"></a>

- *Type:* java.lang.Number

The size of the subnet for the local access network.

Note that this field is omitted from the response if null or unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#lan_allow_subnet_size ZeroTrustDeviceDefaultProfile#lan_allow_subnet_size}

---

##### `registerInterfaceIpWithDns`<sup>Optional</sup> <a name="registerInterfaceIpWithDns" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.registerInterfaceIpWithDns"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#register_interface_ip_with_dns ZeroTrustDeviceDefaultProfile#register_interface_ip_with_dns}

---

##### `sccmVpnBoundarySupport`<sup>Optional</sup> <a name="sccmVpnBoundarySupport" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.sccmVpnBoundarySupport"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. (Windows only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#sccm_vpn_boundary_support ZeroTrustDeviceDefaultProfile#sccm_vpn_boundary_support}

---

##### `serviceModeV2`<sup>Optional</sup> <a name="serviceModeV2" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.serviceModeV2"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#service_mode_v2 ZeroTrustDeviceDefaultProfile#service_mode_v2}.

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.supportUrl"></a>

- *Type:* java.lang.String

The URL to launch when the Send Feedback button is clicked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#support_url ZeroTrustDeviceDefaultProfile#support_url}

---

##### `switchLocked`<sup>Optional</sup> <a name="switchLocked" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.switchLocked"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow the user to turn off the WARP switch and disconnect the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#switch_locked ZeroTrustDeviceDefaultProfile#switch_locked}

---

##### `tunnelProtocol`<sup>Optional</sup> <a name="tunnelProtocol" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.tunnelProtocol"></a>

- *Type:* java.lang.String

Determines which tunnel protocol to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#tunnel_protocol ZeroTrustDeviceDefaultProfile#tunnel_protocol}

---

##### `virtualNetworks`<sup>Optional</sup> <a name="virtualNetworks" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.Initializer.parameter.virtualNetworks"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworks">ZeroTrustDeviceDefaultProfileVirtualNetworks</a>

Virtual network access settings for the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#virtual_networks ZeroTrustDeviceDefaultProfile#virtual_networks}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putDnsSearchSuffixes">putDnsSearchSuffixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putExclude">putExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putInclude">putInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putServiceModeV2">putServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putVirtualNetworks">putVirtualNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowedToLeave">resetAllowedToLeave</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowModeSwitch">resetAllowModeSwitch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowUpdates">resetAllowUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAutoConnect">resetAutoConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetCaptivePortal">resetCaptivePortal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetDisableAutoFallback">resetDisableAutoFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetDnsSearchSuffixes">resetDnsSearchSuffixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetExcludeOfficeIps">resetExcludeOfficeIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetInclude">resetInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetLanAllowMinutes">resetLanAllowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetLanAllowSubnetSize">resetLanAllowSubnetSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetRegisterInterfaceIpWithDns">resetRegisterInterfaceIpWithDns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSccmVpnBoundarySupport">resetSccmVpnBoundarySupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetServiceModeV2">resetServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSupportUrl">resetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSwitchLocked">resetSwitchLocked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetTunnelProtocol">resetTunnelProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetVirtualNetworks">resetVirtualNetworks</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDnsSearchSuffixes` <a name="putDnsSearchSuffixes" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putDnsSearchSuffixes"></a>

```java
public void putDnsSearchSuffixes(IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileDnsSearchSuffixes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putDnsSearchSuffixes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes">ZeroTrustDeviceDefaultProfileDnsSearchSuffixes</a>>

---

##### `putExclude` <a name="putExclude" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putExclude"></a>

```java
public void putExclude(IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileExclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putExclude.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>>

---

##### `putInclude` <a name="putInclude" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putInclude"></a>

```java
public void putInclude(IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileInclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putInclude.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>>

---

##### `putServiceModeV2` <a name="putServiceModeV2" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putServiceModeV2"></a>

```java
public void putServiceModeV2(ZeroTrustDeviceDefaultProfileServiceModeV2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putServiceModeV2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

---

##### `putVirtualNetworks` <a name="putVirtualNetworks" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putVirtualNetworks"></a>

```java
public void putVirtualNetworks(ZeroTrustDeviceDefaultProfileVirtualNetworks value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.putVirtualNetworks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworks">ZeroTrustDeviceDefaultProfileVirtualNetworks</a>

---

##### `resetAllowedToLeave` <a name="resetAllowedToLeave" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowedToLeave"></a>

```java
public void resetAllowedToLeave()
```

##### `resetAllowModeSwitch` <a name="resetAllowModeSwitch" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowModeSwitch"></a>

```java
public void resetAllowModeSwitch()
```

##### `resetAllowUpdates` <a name="resetAllowUpdates" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAllowUpdates"></a>

```java
public void resetAllowUpdates()
```

##### `resetAutoConnect` <a name="resetAutoConnect" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetAutoConnect"></a>

```java
public void resetAutoConnect()
```

##### `resetCaptivePortal` <a name="resetCaptivePortal" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetCaptivePortal"></a>

```java
public void resetCaptivePortal()
```

##### `resetDisableAutoFallback` <a name="resetDisableAutoFallback" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetDisableAutoFallback"></a>

```java
public void resetDisableAutoFallback()
```

##### `resetDnsSearchSuffixes` <a name="resetDnsSearchSuffixes" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetDnsSearchSuffixes"></a>

```java
public void resetDnsSearchSuffixes()
```

##### `resetExclude` <a name="resetExclude" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetExclude"></a>

```java
public void resetExclude()
```

##### `resetExcludeOfficeIps` <a name="resetExcludeOfficeIps" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetExcludeOfficeIps"></a>

```java
public void resetExcludeOfficeIps()
```

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetInclude"></a>

```java
public void resetInclude()
```

##### `resetLanAllowMinutes` <a name="resetLanAllowMinutes" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetLanAllowMinutes"></a>

```java
public void resetLanAllowMinutes()
```

##### `resetLanAllowSubnetSize` <a name="resetLanAllowSubnetSize" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetLanAllowSubnetSize"></a>

```java
public void resetLanAllowSubnetSize()
```

##### `resetRegisterInterfaceIpWithDns` <a name="resetRegisterInterfaceIpWithDns" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetRegisterInterfaceIpWithDns"></a>

```java
public void resetRegisterInterfaceIpWithDns()
```

##### `resetSccmVpnBoundarySupport` <a name="resetSccmVpnBoundarySupport" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSccmVpnBoundarySupport"></a>

```java
public void resetSccmVpnBoundarySupport()
```

##### `resetServiceModeV2` <a name="resetServiceModeV2" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetServiceModeV2"></a>

```java
public void resetServiceModeV2()
```

##### `resetSupportUrl` <a name="resetSupportUrl" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSupportUrl"></a>

```java
public void resetSupportUrl()
```

##### `resetSwitchLocked` <a name="resetSwitchLocked" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetSwitchLocked"></a>

```java
public void resetSwitchLocked()
```

##### `resetTunnelProtocol` <a name="resetTunnelProtocol" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetTunnelProtocol"></a>

```java
public void resetTunnelProtocol()
```

##### `resetVirtualNetworks` <a name="resetVirtualNetworks" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.resetVirtualNetworks"></a>

```java
public void resetVirtualNetworks()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustDeviceDefaultProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfile;

ZeroTrustDeviceDefaultProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfile;

ZeroTrustDeviceDefaultProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfile;

ZeroTrustDeviceDefaultProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfile;

ZeroTrustDeviceDefaultProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustDeviceDefaultProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ZeroTrustDeviceDefaultProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustDeviceDefaultProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustDeviceDefaultProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceDefaultProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.default">default</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.dnsSearchSuffixes">dnsSearchSuffixes</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList">ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.exclude">exclude</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList">ZeroTrustDeviceDefaultProfileExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fallbackDomains">fallbackDomains</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList">ZeroTrustDeviceDefaultProfileFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.gatewayUniqueId">gatewayUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.include">include</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList">ZeroTrustDeviceDefaultProfileIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference">ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.virtualNetworks">virtualNetworks</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference">ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeaveInput">allowedToLeaveInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitchInput">allowModeSwitchInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdatesInput">allowUpdatesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnectInput">autoConnectInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortalInput">captivePortalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallbackInput">disableAutoFallbackInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.dnsSearchSuffixesInput">dnsSearchSuffixesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes">ZeroTrustDeviceDefaultProfileDnsSearchSuffixes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeInput">excludeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIpsInput">excludeOfficeIpsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.includeInput">includeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowMinutesInput">lanAllowMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowSubnetSizeInput">lanAllowSubnetSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDnsInput">registerInterfaceIpWithDnsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.sccmVpnBoundarySupportInput">sccmVpnBoundarySupportInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2Input">serviceModeV2Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrlInput">supportUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLockedInput">switchLockedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocolInput">tunnelProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.virtualNetworksInput">virtualNetworksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworks">ZeroTrustDeviceDefaultProfileVirtualNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeave">allowedToLeave</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitch">allowModeSwitch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdates">allowUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnect">autoConnect</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortal">captivePortal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallback">disableAutoFallback</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowMinutes">lanAllowMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowSubnetSize">lanAllowSubnetSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDns">registerInterfaceIpWithDns</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.sccmVpnBoundarySupport">sccmVpnBoundarySupport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLocked">switchLocked</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocol">tunnelProtocol</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.default"></a>

```java
public IResolvable getDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `dnsSearchSuffixes`<sup>Required</sup> <a name="dnsSearchSuffixes" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.dnsSearchSuffixes"></a>

```java
public ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList getDnsSearchSuffixes();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList">ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.exclude"></a>

```java
public ZeroTrustDeviceDefaultProfileExcludeList getExclude();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList">ZeroTrustDeviceDefaultProfileExcludeList</a>

---

##### `fallbackDomains`<sup>Required</sup> <a name="fallbackDomains" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.fallbackDomains"></a>

```java
public ZeroTrustDeviceDefaultProfileFallbackDomainsList getFallbackDomains();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList">ZeroTrustDeviceDefaultProfileFallbackDomainsList</a>

---

##### `gatewayUniqueId`<sup>Required</sup> <a name="gatewayUniqueId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.gatewayUniqueId"></a>

```java
public java.lang.String getGatewayUniqueId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.include"></a>

```java
public ZeroTrustDeviceDefaultProfileIncludeList getInclude();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList">ZeroTrustDeviceDefaultProfileIncludeList</a>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `serviceModeV2`<sup>Required</sup> <a name="serviceModeV2" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2"></a>

```java
public ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference getServiceModeV2();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference">ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference</a>

---

##### `virtualNetworks`<sup>Required</sup> <a name="virtualNetworks" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.virtualNetworks"></a>

```java
public ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference getVirtualNetworks();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference">ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `allowedToLeaveInput`<sup>Optional</sup> <a name="allowedToLeaveInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeaveInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowedToLeaveInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowModeSwitchInput`<sup>Optional</sup> <a name="allowModeSwitchInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitchInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowModeSwitchInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowUpdatesInput`<sup>Optional</sup> <a name="allowUpdatesInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdatesInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowUpdatesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoConnectInput`<sup>Optional</sup> <a name="autoConnectInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnectInput"></a>

```java
public java.lang.Number getAutoConnectInput();
```

- *Type:* java.lang.Number

---

##### `captivePortalInput`<sup>Optional</sup> <a name="captivePortalInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortalInput"></a>

```java
public java.lang.Number getCaptivePortalInput();
```

- *Type:* java.lang.Number

---

##### `disableAutoFallbackInput`<sup>Optional</sup> <a name="disableAutoFallbackInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallbackInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutoFallbackInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dnsSearchSuffixesInput`<sup>Optional</sup> <a name="dnsSearchSuffixesInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.dnsSearchSuffixesInput"></a>

```java
public IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileDnsSearchSuffixes> getDnsSearchSuffixesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes">ZeroTrustDeviceDefaultProfileDnsSearchSuffixes</a>>

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeInput"></a>

```java
public IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileExclude> getExcludeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>>

---

##### `excludeOfficeIpsInput`<sup>Optional</sup> <a name="excludeOfficeIpsInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIpsInput"></a>

```java
public java.lang.Boolean|IResolvable getExcludeOfficeIpsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.includeInput"></a>

```java
public IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileInclude> getIncludeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>>

---

##### `lanAllowMinutesInput`<sup>Optional</sup> <a name="lanAllowMinutesInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowMinutesInput"></a>

```java
public java.lang.Number getLanAllowMinutesInput();
```

- *Type:* java.lang.Number

---

##### `lanAllowSubnetSizeInput`<sup>Optional</sup> <a name="lanAllowSubnetSizeInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowSubnetSizeInput"></a>

```java
public java.lang.Number getLanAllowSubnetSizeInput();
```

- *Type:* java.lang.Number

---

##### `registerInterfaceIpWithDnsInput`<sup>Optional</sup> <a name="registerInterfaceIpWithDnsInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDnsInput"></a>

```java
public java.lang.Boolean|IResolvable getRegisterInterfaceIpWithDnsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sccmVpnBoundarySupportInput`<sup>Optional</sup> <a name="sccmVpnBoundarySupportInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.sccmVpnBoundarySupportInput"></a>

```java
public java.lang.Boolean|IResolvable getSccmVpnBoundarySupportInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceModeV2Input`<sup>Optional</sup> <a name="serviceModeV2Input" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.serviceModeV2Input"></a>

```java
public IResolvable|ZeroTrustDeviceDefaultProfileServiceModeV2 getServiceModeV2Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

---

##### `supportUrlInput`<sup>Optional</sup> <a name="supportUrlInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrlInput"></a>

```java
public java.lang.String getSupportUrlInput();
```

- *Type:* java.lang.String

---

##### `switchLockedInput`<sup>Optional</sup> <a name="switchLockedInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLockedInput"></a>

```java
public java.lang.Boolean|IResolvable getSwitchLockedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tunnelProtocolInput`<sup>Optional</sup> <a name="tunnelProtocolInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocolInput"></a>

```java
public java.lang.String getTunnelProtocolInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworksInput`<sup>Optional</sup> <a name="virtualNetworksInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.virtualNetworksInput"></a>

```java
public IResolvable|ZeroTrustDeviceDefaultProfileVirtualNetworks getVirtualNetworksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworks">ZeroTrustDeviceDefaultProfileVirtualNetworks</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `allowedToLeave`<sup>Required</sup> <a name="allowedToLeave" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowedToLeave"></a>

```java
public java.lang.Boolean|IResolvable getAllowedToLeave();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowModeSwitch`<sup>Required</sup> <a name="allowModeSwitch" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowModeSwitch"></a>

```java
public java.lang.Boolean|IResolvable getAllowModeSwitch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowUpdates`<sup>Required</sup> <a name="allowUpdates" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.allowUpdates"></a>

```java
public java.lang.Boolean|IResolvable getAllowUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoConnect`<sup>Required</sup> <a name="autoConnect" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.autoConnect"></a>

```java
public java.lang.Number getAutoConnect();
```

- *Type:* java.lang.Number

---

##### `captivePortal`<sup>Required</sup> <a name="captivePortal" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.captivePortal"></a>

```java
public java.lang.Number getCaptivePortal();
```

- *Type:* java.lang.Number

---

##### `disableAutoFallback`<sup>Required</sup> <a name="disableAutoFallback" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.disableAutoFallback"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutoFallback();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludeOfficeIps`<sup>Required</sup> <a name="excludeOfficeIps" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.excludeOfficeIps"></a>

```java
public java.lang.Boolean|IResolvable getExcludeOfficeIps();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `lanAllowMinutes`<sup>Required</sup> <a name="lanAllowMinutes" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowMinutes"></a>

```java
public java.lang.Number getLanAllowMinutes();
```

- *Type:* java.lang.Number

---

##### `lanAllowSubnetSize`<sup>Required</sup> <a name="lanAllowSubnetSize" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.lanAllowSubnetSize"></a>

```java
public java.lang.Number getLanAllowSubnetSize();
```

- *Type:* java.lang.Number

---

##### `registerInterfaceIpWithDns`<sup>Required</sup> <a name="registerInterfaceIpWithDns" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDns"></a>

```java
public java.lang.Boolean|IResolvable getRegisterInterfaceIpWithDns();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sccmVpnBoundarySupport`<sup>Required</sup> <a name="sccmVpnBoundarySupport" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.sccmVpnBoundarySupport"></a>

```java
public java.lang.Boolean|IResolvable getSccmVpnBoundarySupport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

---

##### `switchLocked`<sup>Required</sup> <a name="switchLocked" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.switchLocked"></a>

```java
public java.lang.Boolean|IResolvable getSwitchLocked();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tunnelProtocol`<sup>Required</sup> <a name="tunnelProtocol" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tunnelProtocol"></a>

```java
public java.lang.String getTunnelProtocol();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceDefaultProfileConfig <a name="ZeroTrustDeviceDefaultProfileConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileConfig;

ZeroTrustDeviceDefaultProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .allowedToLeave(java.lang.Boolean|IResolvable)
//  .allowModeSwitch(java.lang.Boolean|IResolvable)
//  .allowUpdates(java.lang.Boolean|IResolvable)
//  .autoConnect(java.lang.Number)
//  .captivePortal(java.lang.Number)
//  .disableAutoFallback(java.lang.Boolean|IResolvable)
//  .dnsSearchSuffixes(IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileDnsSearchSuffixes>)
//  .exclude(IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileExclude>)
//  .excludeOfficeIps(java.lang.Boolean|IResolvable)
//  .include(IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileInclude>)
//  .lanAllowMinutes(java.lang.Number)
//  .lanAllowSubnetSize(java.lang.Number)
//  .registerInterfaceIpWithDns(java.lang.Boolean|IResolvable)
//  .sccmVpnBoundarySupport(java.lang.Boolean|IResolvable)
//  .serviceModeV2(ZeroTrustDeviceDefaultProfileServiceModeV2)
//  .supportUrl(java.lang.String)
//  .switchLocked(java.lang.Boolean|IResolvable)
//  .tunnelProtocol(java.lang.String)
//  .virtualNetworks(ZeroTrustDeviceDefaultProfileVirtualNetworks)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#account_id ZeroTrustDeviceDefaultProfile#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowedToLeave">allowedToLeave</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow devices to leave the organization. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowModeSwitch">allowModeSwitch</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow the user to switch WARP between modes. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowUpdates">allowUpdates</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to receive update notifications when a new version of the client is available. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.autoConnect">autoConnect</a></code> | <code>java.lang.Number</code> | The amount of time in seconds to reconnect after having been disabled. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.captivePortal">captivePortal</a></code> | <code>java.lang.Number</code> | Turn on the captive portal after the specified amount of time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.disableAutoFallback">disableAutoFallback</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.dnsSearchSuffixes">dnsSearchSuffixes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes">ZeroTrustDeviceDefaultProfileDnsSearchSuffixes</a>></code> | List of DNS search suffixes to apply to clients. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.exclude">exclude</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>></code> | List of routes excluded in the WARP client's tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.include">include</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>></code> | List of routes included in the WARP client's tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lanAllowMinutes">lanAllowMinutes</a></code> | <code>java.lang.Number</code> | The amount of time in minutes a user is allowed access to their LAN. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lanAllowSubnetSize">lanAllowSubnetSize</a></code> | <code>java.lang.Number</code> | The size of the subnet for the local access network. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.registerInterfaceIpWithDns">registerInterfaceIpWithDns</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.sccmVpnBoundarySupport">sccmVpnBoundarySupport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. (Windows only). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#service_mode_v2 ZeroTrustDeviceDefaultProfile#service_mode_v2}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.supportUrl">supportUrl</a></code> | <code>java.lang.String</code> | The URL to launch when the Send Feedback button is clicked. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.switchLocked">switchLocked</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.tunnelProtocol">tunnelProtocol</a></code> | <code>java.lang.String</code> | Determines which tunnel protocol to use. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.virtualNetworks">virtualNetworks</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworks">ZeroTrustDeviceDefaultProfileVirtualNetworks</a></code> | Virtual network access settings for the device. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#account_id ZeroTrustDeviceDefaultProfile#account_id}.

---

##### `allowedToLeave`<sup>Optional</sup> <a name="allowedToLeave" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowedToLeave"></a>

```java
public java.lang.Boolean|IResolvable getAllowedToLeave();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow devices to leave the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#allowed_to_leave ZeroTrustDeviceDefaultProfile#allowed_to_leave}

---

##### `allowModeSwitch`<sup>Optional</sup> <a name="allowModeSwitch" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowModeSwitch"></a>

```java
public java.lang.Boolean|IResolvable getAllowModeSwitch();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow the user to switch WARP between modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#allow_mode_switch ZeroTrustDeviceDefaultProfile#allow_mode_switch}

---

##### `allowUpdates`<sup>Optional</sup> <a name="allowUpdates" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.allowUpdates"></a>

```java
public java.lang.Boolean|IResolvable getAllowUpdates();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to receive update notifications when a new version of the client is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#allow_updates ZeroTrustDeviceDefaultProfile#allow_updates}

---

##### `autoConnect`<sup>Optional</sup> <a name="autoConnect" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.autoConnect"></a>

```java
public java.lang.Number getAutoConnect();
```

- *Type:* java.lang.Number

The amount of time in seconds to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#auto_connect ZeroTrustDeviceDefaultProfile#auto_connect}

---

##### `captivePortal`<sup>Optional</sup> <a name="captivePortal" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.captivePortal"></a>

```java
public java.lang.Number getCaptivePortal();
```

- *Type:* java.lang.Number

Turn on the captive portal after the specified amount of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#captive_portal ZeroTrustDeviceDefaultProfile#captive_portal}

---

##### `disableAutoFallback`<sup>Optional</sup> <a name="disableAutoFallback" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.disableAutoFallback"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutoFallback();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#disable_auto_fallback ZeroTrustDeviceDefaultProfile#disable_auto_fallback}

---

##### `dnsSearchSuffixes`<sup>Optional</sup> <a name="dnsSearchSuffixes" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.dnsSearchSuffixes"></a>

```java
public IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileDnsSearchSuffixes> getDnsSearchSuffixes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes">ZeroTrustDeviceDefaultProfileDnsSearchSuffixes</a>>

List of DNS search suffixes to apply to clients.

Suffixes are evaluated in order. Use an empty array to clear.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#dns_search_suffixes ZeroTrustDeviceDefaultProfile#dns_search_suffixes}

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.exclude"></a>

```java
public IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileExclude> getExclude();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>>

List of routes excluded in the WARP client's tunnel.

Both 'exclude' and 'include' cannot be set in the same request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#exclude ZeroTrustDeviceDefaultProfile#exclude}

---

##### `excludeOfficeIps`<sup>Optional</sup> <a name="excludeOfficeIps" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.excludeOfficeIps"></a>

```java
public java.lang.Boolean|IResolvable getExcludeOfficeIps();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to add Microsoft IPs to Split Tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#exclude_office_ips ZeroTrustDeviceDefaultProfile#exclude_office_ips}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.include"></a>

```java
public IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileInclude> getInclude();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>>

List of routes included in the WARP client's tunnel.

Both 'exclude' and 'include' cannot be set in the same request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#include ZeroTrustDeviceDefaultProfile#include}

---

##### `lanAllowMinutes`<sup>Optional</sup> <a name="lanAllowMinutes" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lanAllowMinutes"></a>

```java
public java.lang.Number getLanAllowMinutes();
```

- *Type:* java.lang.Number

The amount of time in minutes a user is allowed access to their LAN.

A value of 0 will allow LAN access until the next WARP reconnection, such as a reboot or a laptop waking from sleep. Note that this field is omitted from the response if null or unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#lan_allow_minutes ZeroTrustDeviceDefaultProfile#lan_allow_minutes}

---

##### `lanAllowSubnetSize`<sup>Optional</sup> <a name="lanAllowSubnetSize" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.lanAllowSubnetSize"></a>

```java
public java.lang.Number getLanAllowSubnetSize();
```

- *Type:* java.lang.Number

The size of the subnet for the local access network.

Note that this field is omitted from the response if null or unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#lan_allow_subnet_size ZeroTrustDeviceDefaultProfile#lan_allow_subnet_size}

---

##### `registerInterfaceIpWithDns`<sup>Optional</sup> <a name="registerInterfaceIpWithDns" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.registerInterfaceIpWithDns"></a>

```java
public java.lang.Boolean|IResolvable getRegisterInterfaceIpWithDns();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#register_interface_ip_with_dns ZeroTrustDeviceDefaultProfile#register_interface_ip_with_dns}

---

##### `sccmVpnBoundarySupport`<sup>Optional</sup> <a name="sccmVpnBoundarySupport" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.sccmVpnBoundarySupport"></a>

```java
public java.lang.Boolean|IResolvable getSccmVpnBoundarySupport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. (Windows only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#sccm_vpn_boundary_support ZeroTrustDeviceDefaultProfile#sccm_vpn_boundary_support}

---

##### `serviceModeV2`<sup>Optional</sup> <a name="serviceModeV2" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.serviceModeV2"></a>

```java
public ZeroTrustDeviceDefaultProfileServiceModeV2 getServiceModeV2();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#service_mode_v2 ZeroTrustDeviceDefaultProfile#service_mode_v2}.

---

##### `supportUrl`<sup>Optional</sup> <a name="supportUrl" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.supportUrl"></a>

```java
public java.lang.String getSupportUrl();
```

- *Type:* java.lang.String

The URL to launch when the Send Feedback button is clicked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#support_url ZeroTrustDeviceDefaultProfile#support_url}

---

##### `switchLocked`<sup>Optional</sup> <a name="switchLocked" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.switchLocked"></a>

```java
public java.lang.Boolean|IResolvable getSwitchLocked();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow the user to turn off the WARP switch and disconnect the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#switch_locked ZeroTrustDeviceDefaultProfile#switch_locked}

---

##### `tunnelProtocol`<sup>Optional</sup> <a name="tunnelProtocol" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.tunnelProtocol"></a>

```java
public java.lang.String getTunnelProtocol();
```

- *Type:* java.lang.String

Determines which tunnel protocol to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#tunnel_protocol ZeroTrustDeviceDefaultProfile#tunnel_protocol}

---

##### `virtualNetworks`<sup>Optional</sup> <a name="virtualNetworks" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileConfig.property.virtualNetworks"></a>

```java
public ZeroTrustDeviceDefaultProfileVirtualNetworks getVirtualNetworks();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworks">ZeroTrustDeviceDefaultProfileVirtualNetworks</a>

Virtual network access settings for the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#virtual_networks ZeroTrustDeviceDefaultProfile#virtual_networks}

---

### ZeroTrustDeviceDefaultProfileDnsSearchSuffixes <a name="ZeroTrustDeviceDefaultProfileDnsSearchSuffixes" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes;

ZeroTrustDeviceDefaultProfileDnsSearchSuffixes.builder()
    .suffix(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes.property.suffix">suffix</a></code> | <code>java.lang.String</code> | The DNS search suffix to append when resolving short hostnames. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes.property.description">description</a></code> | <code>java.lang.String</code> | A description of the DNS search suffix. |

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

The DNS search suffix to append when resolving short hostnames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#suffix ZeroTrustDeviceDefaultProfile#suffix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the DNS search suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#description ZeroTrustDeviceDefaultProfile#description}

---

### ZeroTrustDeviceDefaultProfileExclude <a name="ZeroTrustDeviceDefaultProfileExclude" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileExclude;

ZeroTrustDeviceDefaultProfileExclude.builder()
//  .address(java.lang.String)
//  .description(java.lang.String)
//  .host(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.address">address</a></code> | <code>java.lang.String</code> | The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.description">description</a></code> | <code>java.lang.String</code> | A description of the Split Tunnel item, displayed in the client UI. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.host">host</a></code> | <code>java.lang.String</code> | The domain name to exclude from the tunnel. If `host` is present, `address` must not be present. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#address ZeroTrustDeviceDefaultProfile#address}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the Split Tunnel item, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#description ZeroTrustDeviceDefaultProfile#description}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The domain name to exclude from the tunnel. If `host` is present, `address` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#host ZeroTrustDeviceDefaultProfile#host}

---

### ZeroTrustDeviceDefaultProfileFallbackDomains <a name="ZeroTrustDeviceDefaultProfileFallbackDomains" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileFallbackDomains;

ZeroTrustDeviceDefaultProfileFallbackDomains.builder()
    .build();
```


### ZeroTrustDeviceDefaultProfileInclude <a name="ZeroTrustDeviceDefaultProfileInclude" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileInclude;

ZeroTrustDeviceDefaultProfileInclude.builder()
//  .address(java.lang.String)
//  .description(java.lang.String)
//  .host(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.address">address</a></code> | <code>java.lang.String</code> | The address in CIDR format to include in the tunnel. If `address` is present, `host` must not be present. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.description">description</a></code> | <code>java.lang.String</code> | A description of the Split Tunnel item, displayed in the client UI. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.host">host</a></code> | <code>java.lang.String</code> | The domain name to include in the tunnel. If `host` is present, `address` must not be present. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The address in CIDR format to include in the tunnel. If `address` is present, `host` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#address ZeroTrustDeviceDefaultProfile#address}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the Split Tunnel item, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#description ZeroTrustDeviceDefaultProfile#description}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The domain name to include in the tunnel. If `host` is present, `address` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#host ZeroTrustDeviceDefaultProfile#host}

---

### ZeroTrustDeviceDefaultProfileServiceModeV2 <a name="ZeroTrustDeviceDefaultProfileServiceModeV2" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileServiceModeV2;

ZeroTrustDeviceDefaultProfileServiceModeV2.builder()
//  .mode(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.mode">mode</a></code> | <code>java.lang.String</code> | The mode to run the WARP client under. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.port">port</a></code> | <code>java.lang.Number</code> | The port number when used with proxy mode. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The mode to run the WARP client under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#mode ZeroTrustDeviceDefaultProfile#mode}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number when used with proxy mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#port ZeroTrustDeviceDefaultProfile#port}

---

### ZeroTrustDeviceDefaultProfileVirtualNetworks <a name="ZeroTrustDeviceDefaultProfileVirtualNetworks" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworks.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileVirtualNetworks;

ZeroTrustDeviceDefaultProfileVirtualNetworks.builder()
    .allowed(java.util.List<java.lang.String>)
    .default(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworks.property.allowed">allowed</a></code> | <code>java.util.List<java.lang.String></code> | List of virtual network IDs the device is allowed to access. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworks.property.default">default</a></code> | <code>java.lang.String</code> | The default virtual network ID. Must be included in the `allowed` list. |

---

##### `allowed`<sup>Required</sup> <a name="allowed" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworks.property.allowed"></a>

```java
public java.util.List<java.lang.String> getAllowed();
```

- *Type:* java.util.List<java.lang.String>

List of virtual network IDs the device is allowed to access.

When virtual_networks is set, at least one entry is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#allowed ZeroTrustDeviceDefaultProfile#allowed}

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworks.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

The default virtual network ID. Must be included in the `allowed` list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_default_profile#default ZeroTrustDeviceDefaultProfile#default}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList <a name="ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList;

new ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.get"></a>

```java
public ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes">ZeroTrustDeviceDefaultProfileDnsSearchSuffixes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileDnsSearchSuffixes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes">ZeroTrustDeviceDefaultProfileDnsSearchSuffixes</a>>

---


### ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference <a name="ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference;

new ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes">ZeroTrustDeviceDefaultProfileDnsSearchSuffixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixesOutputReference.property.internalValue"></a>

```java
public IResolvable|ZeroTrustDeviceDefaultProfileDnsSearchSuffixes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileDnsSearchSuffixes">ZeroTrustDeviceDefaultProfileDnsSearchSuffixes</a>

---


### ZeroTrustDeviceDefaultProfileExcludeList <a name="ZeroTrustDeviceDefaultProfileExcludeList" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileExcludeList;

new ZeroTrustDeviceDefaultProfileExcludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.get"></a>

```java
public ZeroTrustDeviceDefaultProfileExcludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileExclude> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>>

---


### ZeroTrustDeviceDefaultProfileExcludeOutputReference <a name="ZeroTrustDeviceDefaultProfileExcludeOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileExcludeOutputReference;

new ZeroTrustDeviceDefaultProfileExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resetHost">resetHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.resetHost"></a>

```java
public void resetHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExcludeOutputReference.property.internalValue"></a>

```java
public IResolvable|ZeroTrustDeviceDefaultProfileExclude getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileExclude">ZeroTrustDeviceDefaultProfileExclude</a>

---


### ZeroTrustDeviceDefaultProfileFallbackDomainsList <a name="ZeroTrustDeviceDefaultProfileFallbackDomainsList" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileFallbackDomainsList;

new ZeroTrustDeviceDefaultProfileFallbackDomainsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.get"></a>

```java
public ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference <a name="ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference;

new ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.dnsServer">dnsServer</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains">ZeroTrustDeviceDefaultProfileFallbackDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.dnsServer"></a>

```java
public java.util.List<java.lang.String> getDnsServer();
```

- *Type:* java.util.List<java.lang.String>

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.internalValue"></a>

```java
public ZeroTrustDeviceDefaultProfileFallbackDomains getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileFallbackDomains">ZeroTrustDeviceDefaultProfileFallbackDomains</a>

---


### ZeroTrustDeviceDefaultProfileIncludeList <a name="ZeroTrustDeviceDefaultProfileIncludeList" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileIncludeList;

new ZeroTrustDeviceDefaultProfileIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.get"></a>

```java
public ZeroTrustDeviceDefaultProfileIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ZeroTrustDeviceDefaultProfileInclude> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>>

---


### ZeroTrustDeviceDefaultProfileIncludeOutputReference <a name="ZeroTrustDeviceDefaultProfileIncludeOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileIncludeOutputReference;

new ZeroTrustDeviceDefaultProfileIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resetHost">resetHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.resetHost"></a>

```java
public void resetHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileIncludeOutputReference.property.internalValue"></a>

```java
public IResolvable|ZeroTrustDeviceDefaultProfileInclude getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileInclude">ZeroTrustDeviceDefaultProfileInclude</a>

---


### ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference <a name="ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference;

new ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.internalValue"></a>

```java
public IResolvable|ZeroTrustDeviceDefaultProfileServiceModeV2 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileServiceModeV2">ZeroTrustDeviceDefaultProfileServiceModeV2</a>

---


### ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference <a name="ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_default_profile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference;

new ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.property.allowedInput">allowedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.property.allowed">allowed</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworks">ZeroTrustDeviceDefaultProfileVirtualNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedInput`<sup>Optional</sup> <a name="allowedInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.property.allowedInput"></a>

```java
public java.util.List<java.lang.String> getAllowedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `allowed`<sup>Required</sup> <a name="allowed" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.property.allowed"></a>

```java
public java.util.List<java.lang.String> getAllowed();
```

- *Type:* java.util.List<java.lang.String>

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworksOutputReference.property.internalValue"></a>

```java
public IResolvable|ZeroTrustDeviceDefaultProfileVirtualNetworks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDefaultProfile.ZeroTrustDeviceDefaultProfileVirtualNetworks">ZeroTrustDeviceDefaultProfileVirtualNetworks</a>

---




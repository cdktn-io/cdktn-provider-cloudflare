# `spectrumApplication` Submodule <a name="`spectrumApplication` Submodule" id="@cdktn/provider-cloudflare.spectrumApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpectrumApplication <a name="SpectrumApplication" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application cloudflare_spectrum_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.spectrum_application.SpectrumApplication;

SpectrumApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dns(SpectrumApplicationDns)
    .protocol(java.lang.String)
//  .argoSmartRouting(java.lang.Boolean|IResolvable)
//  .edgeIps(SpectrumApplicationEdgeIps)
//  .ipFirewall(java.lang.Boolean|IResolvable)
//  .originDirect(java.util.List<java.lang.String>)
//  .originDns(SpectrumApplicationOriginDns)
//  .originPort(java.util.Map<java.lang.String, java.lang.Object>)
//  .proxyProtocol(java.lang.String)
//  .tls(java.lang.String)
//  .trafficType(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.dns">dns</a></code> | <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a></code> | The name and type of DNS record for the Spectrum application. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | The port configuration at Cloudflare's edge. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.argoSmartRouting">argoSmartRouting</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables Argo Smart Routing for this application. Notes: Only available for TCP applications with traffic_type set to "direct". |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.edgeIps">edgeIps</a></code> | <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a></code> | The anycast edge IP configuration for the hostname of this application. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.ipFirewall">ipFirewall</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables IP Access Rules for this application. Notes: Only available for TCP applications. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.originDirect">originDirect</a></code> | <code>java.util.List<java.lang.String></code> | List of origin IP addresses. Array may contain multiple IP addresses for load balancing. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.originDns">originDns</a></code> | <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a></code> | The name and type of DNS record for the Spectrum application. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.originPort">originPort</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The destination port at the origin. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.proxyProtocol">proxyProtocol</a></code> | <code>java.lang.String</code> | Enables Proxy Protocol to the origin. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.tls">tls</a></code> | <code>java.lang.String</code> | The type of TLS termination associated with the application. Available values: "off", "flexible", "full", "strict". |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.trafficType">trafficType</a></code> | <code>java.lang.String</code> | Determines how data travels from the edge to your origin. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Zone identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.dns"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a>

The name and type of DNS record for the Spectrum application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#dns SpectrumApplication#dns}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

The port configuration at Cloudflare's edge.

May specify a single port, for example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#protocol SpectrumApplication#protocol}

---

##### `argoSmartRouting`<sup>Optional</sup> <a name="argoSmartRouting" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.argoSmartRouting"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables Argo Smart Routing for this application. Notes: Only available for TCP applications with traffic_type set to "direct".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#argo_smart_routing SpectrumApplication#argo_smart_routing}

---

##### `edgeIps`<sup>Optional</sup> <a name="edgeIps" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.edgeIps"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a>

The anycast edge IP configuration for the hostname of this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#edge_ips SpectrumApplication#edge_ips}

---

##### `ipFirewall`<sup>Optional</sup> <a name="ipFirewall" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.ipFirewall"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables IP Access Rules for this application. Notes: Only available for TCP applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#ip_firewall SpectrumApplication#ip_firewall}

---

##### `originDirect`<sup>Optional</sup> <a name="originDirect" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.originDirect"></a>

- *Type:* java.util.List<java.lang.String>

List of origin IP addresses. Array may contain multiple IP addresses for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#origin_direct SpectrumApplication#origin_direct}

---

##### `originDns`<sup>Optional</sup> <a name="originDns" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.originDns"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a>

The name and type of DNS record for the Spectrum application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#origin_dns SpectrumApplication#origin_dns}

---

##### `originPort`<sup>Optional</sup> <a name="originPort" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.originPort"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

The destination port at the origin.

Only specified in conjunction with origin_dns. May use an integer to specify a single origin port, for example `1000`, or a string to specify a range of origin ports, for example `"1000-2000"`.
Notes: If specifying a port range, the number of ports in the range must match the number of ports specified in the "protocol" field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#origin_port SpectrumApplication#origin_port}

---

##### `proxyProtocol`<sup>Optional</sup> <a name="proxyProtocol" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.proxyProtocol"></a>

- *Type:* java.lang.String

Enables Proxy Protocol to the origin.

Refer to [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/) for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple Proxy Protocol.
Available values: "off", "v1", "v2", "simple".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#proxy_protocol SpectrumApplication#proxy_protocol}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.tls"></a>

- *Type:* java.lang.String

The type of TLS termination associated with the application. Available values: "off", "flexible", "full", "strict".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#tls SpectrumApplication#tls}

---

##### `trafficType`<sup>Optional</sup> <a name="trafficType" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.trafficType"></a>

- *Type:* java.lang.String

Determines how data travels from the edge to your origin.

When set to "direct", Spectrum will send traffic directly to your origin, and the application's type is derived from the `protocol`. When set to "http" or "https", Spectrum will apply Cloudflare's HTTP/HTTPS features as it sends traffic to your origin, and the application type matches this property exactly.
Available values: "direct", "http", "https".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#traffic_type SpectrumApplication#traffic_type}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Zone identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#zone_id SpectrumApplication#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.putDns">putDns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.putEdgeIps">putEdgeIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.putOriginDns">putOriginDns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetArgoSmartRouting">resetArgoSmartRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetEdgeIps">resetEdgeIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetIpFirewall">resetIpFirewall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginDirect">resetOriginDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginDns">resetOriginDns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginPort">resetOriginPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetProxyProtocol">resetProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetTls">resetTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetTrafficType">resetTrafficType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDns` <a name="putDns" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.putDns"></a>

```java
public void putDns(SpectrumApplicationDns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a>

---

##### `putEdgeIps` <a name="putEdgeIps" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.putEdgeIps"></a>

```java
public void putEdgeIps(SpectrumApplicationEdgeIps value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.putEdgeIps.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a>

---

##### `putOriginDns` <a name="putOriginDns" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.putOriginDns"></a>

```java
public void putOriginDns(SpectrumApplicationOriginDns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.putOriginDns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a>

---

##### `resetArgoSmartRouting` <a name="resetArgoSmartRouting" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetArgoSmartRouting"></a>

```java
public void resetArgoSmartRouting()
```

##### `resetEdgeIps` <a name="resetEdgeIps" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetEdgeIps"></a>

```java
public void resetEdgeIps()
```

##### `resetIpFirewall` <a name="resetIpFirewall" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetIpFirewall"></a>

```java
public void resetIpFirewall()
```

##### `resetOriginDirect` <a name="resetOriginDirect" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginDirect"></a>

```java
public void resetOriginDirect()
```

##### `resetOriginDns` <a name="resetOriginDns" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginDns"></a>

```java
public void resetOriginDns()
```

##### `resetOriginPort` <a name="resetOriginPort" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginPort"></a>

```java
public void resetOriginPort()
```

##### `resetProxyProtocol` <a name="resetProxyProtocol" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetProxyProtocol"></a>

```java
public void resetProxyProtocol()
```

##### `resetTls` <a name="resetTls" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetTls"></a>

```java
public void resetTls()
```

##### `resetTrafficType` <a name="resetTrafficType" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetTrafficType"></a>

```java
public void resetTrafficType()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SpectrumApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.spectrum_application.SpectrumApplication;

SpectrumApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.spectrum_application.SpectrumApplication;

SpectrumApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.spectrum_application.SpectrumApplication;

SpectrumApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.spectrum_application.SpectrumApplication;

SpectrumApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SpectrumApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SpectrumApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SpectrumApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SpectrumApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SpectrumApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dns">dns</a></code> | <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference">SpectrumApplicationDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.edgeIps">edgeIps</a></code> | <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference">SpectrumApplicationEdgeIpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDns">originDns</a></code> | <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference">SpectrumApplicationOriginDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.argoSmartRoutingInput">argoSmartRoutingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dnsInput">dnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.edgeIpsInput">edgeIpsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.ipFirewallInput">ipFirewallInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDirectInput">originDirectInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDnsInput">originDnsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPortInput">originPortInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.proxyProtocolInput">proxyProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tlsInput">tlsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.trafficTypeInput">trafficTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.argoSmartRouting">argoSmartRouting</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.ipFirewall">ipFirewall</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDirect">originDirect</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPort">originPort</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.proxyProtocol">proxyProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tls">tls</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.trafficType">trafficType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dns"></a>

```java
public SpectrumApplicationDnsOutputReference getDns();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference">SpectrumApplicationDnsOutputReference</a>

---

##### `edgeIps`<sup>Required</sup> <a name="edgeIps" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.edgeIps"></a>

```java
public SpectrumApplicationEdgeIpsOutputReference getEdgeIps();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference">SpectrumApplicationEdgeIpsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `originDns`<sup>Required</sup> <a name="originDns" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDns"></a>

```java
public SpectrumApplicationOriginDnsOutputReference getOriginDns();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference">SpectrumApplicationOriginDnsOutputReference</a>

---

##### `argoSmartRoutingInput`<sup>Optional</sup> <a name="argoSmartRoutingInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.argoSmartRoutingInput"></a>

```java
public java.lang.Boolean|IResolvable getArgoSmartRoutingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dnsInput"></a>

```java
public IResolvable|SpectrumApplicationDns getDnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a>

---

##### `edgeIpsInput`<sup>Optional</sup> <a name="edgeIpsInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.edgeIpsInput"></a>

```java
public IResolvable|SpectrumApplicationEdgeIps getEdgeIpsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a>

---

##### `ipFirewallInput`<sup>Optional</sup> <a name="ipFirewallInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.ipFirewallInput"></a>

```java
public java.lang.Boolean|IResolvable getIpFirewallInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `originDirectInput`<sup>Optional</sup> <a name="originDirectInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDirectInput"></a>

```java
public java.util.List<java.lang.String> getOriginDirectInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `originDnsInput`<sup>Optional</sup> <a name="originDnsInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDnsInput"></a>

```java
public IResolvable|SpectrumApplicationOriginDns getOriginDnsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a>

---

##### `originPortInput`<sup>Optional</sup> <a name="originPortInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPortInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getOriginPortInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `proxyProtocolInput`<sup>Optional</sup> <a name="proxyProtocolInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.proxyProtocolInput"></a>

```java
public java.lang.String getProxyProtocolInput();
```

- *Type:* java.lang.String

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tlsInput"></a>

```java
public java.lang.String getTlsInput();
```

- *Type:* java.lang.String

---

##### `trafficTypeInput`<sup>Optional</sup> <a name="trafficTypeInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.trafficTypeInput"></a>

```java
public java.lang.String getTrafficTypeInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `argoSmartRouting`<sup>Required</sup> <a name="argoSmartRouting" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.argoSmartRouting"></a>

```java
public java.lang.Boolean|IResolvable getArgoSmartRouting();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ipFirewall`<sup>Required</sup> <a name="ipFirewall" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.ipFirewall"></a>

```java
public java.lang.Boolean|IResolvable getIpFirewall();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `originDirect`<sup>Required</sup> <a name="originDirect" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDirect"></a>

```java
public java.util.List<java.lang.String> getOriginDirect();
```

- *Type:* java.util.List<java.lang.String>

---

##### `originPort`<sup>Required</sup> <a name="originPort" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPort"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getOriginPort();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `proxyProtocol`<sup>Required</sup> <a name="proxyProtocol" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.proxyProtocol"></a>

```java
public java.lang.String getProxyProtocol();
```

- *Type:* java.lang.String

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tls"></a>

```java
public java.lang.String getTls();
```

- *Type:* java.lang.String

---

##### `trafficType`<sup>Required</sup> <a name="trafficType" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.trafficType"></a>

```java
public java.lang.String getTrafficType();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpectrumApplicationConfig <a name="SpectrumApplicationConfig" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.spectrum_application.SpectrumApplicationConfig;

SpectrumApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dns(SpectrumApplicationDns)
    .protocol(java.lang.String)
//  .argoSmartRouting(java.lang.Boolean|IResolvable)
//  .edgeIps(SpectrumApplicationEdgeIps)
//  .ipFirewall(java.lang.Boolean|IResolvable)
//  .originDirect(java.util.List<java.lang.String>)
//  .originDns(SpectrumApplicationOriginDns)
//  .originPort(java.util.Map<java.lang.String, java.lang.Object>)
//  .proxyProtocol(java.lang.String)
//  .tls(java.lang.String)
//  .trafficType(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.dns">dns</a></code> | <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a></code> | The name and type of DNS record for the Spectrum application. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The port configuration at Cloudflare's edge. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.argoSmartRouting">argoSmartRouting</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables Argo Smart Routing for this application. Notes: Only available for TCP applications with traffic_type set to "direct". |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.edgeIps">edgeIps</a></code> | <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a></code> | The anycast edge IP configuration for the hostname of this application. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.ipFirewall">ipFirewall</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables IP Access Rules for this application. Notes: Only available for TCP applications. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originDirect">originDirect</a></code> | <code>java.util.List<java.lang.String></code> | List of origin IP addresses. Array may contain multiple IP addresses for load balancing. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originDns">originDns</a></code> | <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a></code> | The name and type of DNS record for the Spectrum application. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originPort">originPort</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The destination port at the origin. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.proxyProtocol">proxyProtocol</a></code> | <code>java.lang.String</code> | Enables Proxy Protocol to the origin. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.tls">tls</a></code> | <code>java.lang.String</code> | The type of TLS termination associated with the application. Available values: "off", "flexible", "full", "strict". |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.trafficType">trafficType</a></code> | <code>java.lang.String</code> | Determines how data travels from the edge to your origin. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Zone identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.dns"></a>

```java
public SpectrumApplicationDns getDns();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a>

The name and type of DNS record for the Spectrum application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#dns SpectrumApplication#dns}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The port configuration at Cloudflare's edge.

May specify a single port, for example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#protocol SpectrumApplication#protocol}

---

##### `argoSmartRouting`<sup>Optional</sup> <a name="argoSmartRouting" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.argoSmartRouting"></a>

```java
public java.lang.Boolean|IResolvable getArgoSmartRouting();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables Argo Smart Routing for this application. Notes: Only available for TCP applications with traffic_type set to "direct".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#argo_smart_routing SpectrumApplication#argo_smart_routing}

---

##### `edgeIps`<sup>Optional</sup> <a name="edgeIps" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.edgeIps"></a>

```java
public SpectrumApplicationEdgeIps getEdgeIps();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a>

The anycast edge IP configuration for the hostname of this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#edge_ips SpectrumApplication#edge_ips}

---

##### `ipFirewall`<sup>Optional</sup> <a name="ipFirewall" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.ipFirewall"></a>

```java
public java.lang.Boolean|IResolvable getIpFirewall();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables IP Access Rules for this application. Notes: Only available for TCP applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#ip_firewall SpectrumApplication#ip_firewall}

---

##### `originDirect`<sup>Optional</sup> <a name="originDirect" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originDirect"></a>

```java
public java.util.List<java.lang.String> getOriginDirect();
```

- *Type:* java.util.List<java.lang.String>

List of origin IP addresses. Array may contain multiple IP addresses for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#origin_direct SpectrumApplication#origin_direct}

---

##### `originDns`<sup>Optional</sup> <a name="originDns" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originDns"></a>

```java
public SpectrumApplicationOriginDns getOriginDns();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a>

The name and type of DNS record for the Spectrum application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#origin_dns SpectrumApplication#origin_dns}

---

##### `originPort`<sup>Optional</sup> <a name="originPort" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originPort"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getOriginPort();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

The destination port at the origin.

Only specified in conjunction with origin_dns. May use an integer to specify a single origin port, for example `1000`, or a string to specify a range of origin ports, for example `"1000-2000"`.
Notes: If specifying a port range, the number of ports in the range must match the number of ports specified in the "protocol" field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#origin_port SpectrumApplication#origin_port}

---

##### `proxyProtocol`<sup>Optional</sup> <a name="proxyProtocol" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.proxyProtocol"></a>

```java
public java.lang.String getProxyProtocol();
```

- *Type:* java.lang.String

Enables Proxy Protocol to the origin.

Refer to [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/) for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple Proxy Protocol.
Available values: "off", "v1", "v2", "simple".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#proxy_protocol SpectrumApplication#proxy_protocol}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.tls"></a>

```java
public java.lang.String getTls();
```

- *Type:* java.lang.String

The type of TLS termination associated with the application. Available values: "off", "flexible", "full", "strict".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#tls SpectrumApplication#tls}

---

##### `trafficType`<sup>Optional</sup> <a name="trafficType" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.trafficType"></a>

```java
public java.lang.String getTrafficType();
```

- *Type:* java.lang.String

Determines how data travels from the edge to your origin.

When set to "direct", Spectrum will send traffic directly to your origin, and the application's type is derived from the `protocol`. When set to "http" or "https", Spectrum will apply Cloudflare's HTTP/HTTPS features as it sends traffic to your origin, and the application type matches this property exactly.
Available values: "direct", "http", "https".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#traffic_type SpectrumApplication#traffic_type}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Zone identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#zone_id SpectrumApplication#zone_id}

---

### SpectrumApplicationDns <a name="SpectrumApplicationDns" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDns.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.spectrum_application.SpectrumApplicationDns;

SpectrumApplicationDns.builder()
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDns.property.name">name</a></code> | <code>java.lang.String</code> | The name of the DNS record associated with the application. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDns.property.type">type</a></code> | <code>java.lang.String</code> | The type of DNS record associated with the application. Available values: "CNAME", "ADDRESS". |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the DNS record associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#name SpectrumApplication#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDns.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of DNS record associated with the application. Available values: "CNAME", "ADDRESS".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#type SpectrumApplication#type}

---

### SpectrumApplicationEdgeIps <a name="SpectrumApplicationEdgeIps" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.spectrum_application.SpectrumApplicationEdgeIps;

SpectrumApplicationEdgeIps.builder()
//  .connectivity(java.lang.String)
//  .ips(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.connectivity">connectivity</a></code> | <code>java.lang.String</code> | The IP versions supported for inbound connections on Spectrum anycast IPs. Available values: "all", "ipv4", "ipv6". |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | The array of customer owned IPs we broadcast via anycast for this hostname and application. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.type">type</a></code> | <code>java.lang.String</code> | The type of edge IP configuration specified. |

---

##### `connectivity`<sup>Optional</sup> <a name="connectivity" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.connectivity"></a>

```java
public java.lang.String getConnectivity();
```

- *Type:* java.lang.String

The IP versions supported for inbound connections on Spectrum anycast IPs. Available values: "all", "ipv4", "ipv6".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#connectivity SpectrumApplication#connectivity}

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

The array of customer owned IPs we broadcast via anycast for this hostname and application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#ips SpectrumApplication#ips}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of edge IP configuration specified.

Dynamically allocated edge IPs use Spectrum anycast IPs in accordance with the connectivity you specify. Only valid with CNAME DNS names.
Available values: "dynamic", "static".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#type SpectrumApplication#type}

---

### SpectrumApplicationOriginDns <a name="SpectrumApplicationOriginDns" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.spectrum_application.SpectrumApplicationOriginDns;

SpectrumApplicationOriginDns.builder()
//  .name(java.lang.String)
//  .ttl(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.property.name">name</a></code> | <code>java.lang.String</code> | The name of the DNS record associated with the origin. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | The TTL of our resolution of your DNS record in seconds. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.property.type">type</a></code> | <code>java.lang.String</code> | The type of DNS record associated with the origin. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the DNS record associated with the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#name SpectrumApplication#name}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

The TTL of our resolution of your DNS record in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#ttl SpectrumApplication#ttl}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of DNS record associated with the origin.

"" is used to specify a combination of A/AAAA records.
Available values: "", "A", "AAAA", "SRV".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/spectrum_application#type SpectrumApplication#type}

---

## Classes <a name="Classes" id="Classes"></a>

### SpectrumApplicationDnsOutputReference <a name="SpectrumApplicationDnsOutputReference" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.spectrum_application.SpectrumApplicationDnsOutputReference;

new SpectrumApplicationDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.internalValue"></a>

```java
public IResolvable|SpectrumApplicationDns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a>

---


### SpectrumApplicationEdgeIpsOutputReference <a name="SpectrumApplicationEdgeIpsOutputReference" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.spectrum_application.SpectrumApplicationEdgeIpsOutputReference;

new SpectrumApplicationEdgeIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetConnectivity">resetConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetIps">resetIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectivity` <a name="resetConnectivity" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetConnectivity"></a>

```java
public void resetConnectivity()
```

##### `resetIps` <a name="resetIps" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetIps"></a>

```java
public void resetIps()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.connectivityInput">connectivityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.ipsInput">ipsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.connectivity">connectivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectivityInput`<sup>Optional</sup> <a name="connectivityInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.connectivityInput"></a>

```java
public java.lang.String getConnectivityInput();
```

- *Type:* java.lang.String

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.ipsInput"></a>

```java
public java.util.List<java.lang.String> getIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `connectivity`<sup>Required</sup> <a name="connectivity" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.connectivity"></a>

```java
public java.lang.String getConnectivity();
```

- *Type:* java.lang.String

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.internalValue"></a>

```java
public IResolvable|SpectrumApplicationEdgeIps getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a>

---


### SpectrumApplicationOriginDnsOutputReference <a name="SpectrumApplicationOriginDnsOutputReference" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.spectrum_application.SpectrumApplicationOriginDnsOutputReference;

new SpectrumApplicationOriginDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.internalValue"></a>

```java
public IResolvable|SpectrumApplicationOriginDns getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a>

---




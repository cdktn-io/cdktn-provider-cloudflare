# `dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks` Submodule <a name="`dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks cloudflare_zero_trust_tunnel_cloudflared_virtual_networks}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks;

DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .id(java.lang.String)
//  .isDefault(java.lang.Boolean|IResolvable)
//  .isDefaultNetwork(java.lang.Boolean|IResolvable)
//  .isDeleted(java.lang.Boolean|IResolvable)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | UUID of the virtual network. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.isDefault">isDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If `true`, only include the default virtual network. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.isDefaultNetwork">isDefaultNetwork</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If `true`, only include the default virtual network. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.isDeleted">isDeleted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If `true`, only include deleted virtual networks. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-friendly name for the virtual network. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#account_id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

UUID of the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.isDefault"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If `true`, only include the default virtual network.

If `false`, exclude the default virtual network. If empty, all virtual networks will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#is_default DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#is_default}

---

##### `isDefaultNetwork`<sup>Optional</sup> <a name="isDefaultNetwork" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.isDefaultNetwork"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If `true`, only include the default virtual network.

If `false`, exclude the default virtual network. If empty, all virtual networks will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#is_default_network DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#is_default_network}

---

##### `isDeleted`<sup>Optional</sup> <a name="isDeleted" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.isDeleted"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If `true`, only include deleted virtual networks.

If `false`, exclude deleted virtual networks. If empty, all virtual networks will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#is_deleted DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#is_deleted}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#max_items DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-friendly name for the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#name DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetIsDefaultNetwork">resetIsDefaultNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetIsDeleted">resetIsDeleted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetId"></a>

```java
public void resetId()
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetIsDefault"></a>

```java
public void resetIsDefault()
```

##### `resetIsDefaultNetwork` <a name="resetIsDefaultNetwork" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetIsDefaultNetwork"></a>

```java
public void resetIsDefaultNetwork()
```

##### `resetIsDeleted` <a name="resetIsDeleted" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetIsDeleted"></a>

```java
public void resetIsDeleted()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks;

DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks;

DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks;

DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks;

DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDefaultInput">isDefaultInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDefaultNetworkInput">isDefaultNetworkInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDeletedInput">isDeletedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDefaultNetwork">isDefaultNetwork</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDeleted">isDeleted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.result"></a>

```java
public DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDefaultInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isDefaultNetworkInput`<sup>Optional</sup> <a name="isDefaultNetworkInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDefaultNetworkInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultNetworkInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isDeletedInput`<sup>Optional</sup> <a name="isDeletedInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDeletedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDeletedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDefault"></a>

```java
public java.lang.Boolean|IResolvable getIsDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isDefaultNetwork`<sup>Required</sup> <a name="isDefaultNetwork" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDefaultNetwork"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultNetwork();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.isDeleted"></a>

```java
public java.lang.Boolean|IResolvable getIsDeleted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig;

DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .id(java.lang.String)
//  .isDefault(java.lang.Boolean|IResolvable)
//  .isDefaultNetwork(java.lang.Boolean|IResolvable)
//  .isDeleted(java.lang.Boolean|IResolvable)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.id">id</a></code> | <code>java.lang.String</code> | UUID of the virtual network. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If `true`, only include the default virtual network. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.isDefaultNetwork">isDefaultNetwork</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If `true`, only include the default virtual network. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.isDeleted">isDeleted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If `true`, only include deleted virtual networks. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-friendly name for the virtual network. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#account_id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

UUID of the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#id DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.isDefault"></a>

```java
public java.lang.Boolean|IResolvable getIsDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If `true`, only include the default virtual network.

If `false`, exclude the default virtual network. If empty, all virtual networks will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#is_default DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#is_default}

---

##### `isDefaultNetwork`<sup>Optional</sup> <a name="isDefaultNetwork" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.isDefaultNetwork"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultNetwork();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If `true`, only include the default virtual network.

If `false`, exclude the default virtual network. If empty, all virtual networks will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#is_default_network DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#is_default_network}

---

##### `isDeleted`<sup>Optional</sup> <a name="isDeleted" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.isDeleted"></a>

```java
public java.lang.Boolean|IResolvable getIsDeleted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If `true`, only include deleted virtual networks.

If `false`, exclude deleted virtual networks. If empty, all virtual networks will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#is_deleted DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#is_deleted}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#max_items DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-friendly name for the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/zero_trust_tunnel_cloudflared_virtual_networks#name DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks#name}

---

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult;

DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList;

new DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.get"></a>

```java
public DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference <a name="DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_cloudflared_virtual_networks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference;

new DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.deletedAt">deletedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.isDefaultNetwork">isDefaultNetwork</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.deletedAt"></a>

```java
public java.lang.String getDeletedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDefaultNetwork`<sup>Required</sup> <a name="isDefaultNetwork" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.isDefaultNetwork"></a>

```java
public IResolvable getIsDefaultNetwork();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredVirtualNetworks.DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult">DataCloudflareZeroTrustTunnelCloudflaredVirtualNetworksResult</a>

---




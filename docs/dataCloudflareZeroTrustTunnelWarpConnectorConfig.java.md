# `dataCloudflareZeroTrustTunnelWarpConnectorConfig` Submodule <a name="`dataCloudflareZeroTrustTunnelWarpConnectorConfig` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorConfigA <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigA" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_tunnel_warp_connector_config cloudflare_zero_trust_tunnel_warp_connector_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connector_config.DataCloudflareZeroTrustTunnelWarpConnectorConfigA;

DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .tunnelId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | UUID of the tunnel. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_tunnel_warp_connector_config#account_id DataCloudflareZeroTrustTunnelWarpConnectorConfigA#account_id}

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.tunnelId"></a>

- *Type:* java.lang.String

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_tunnel_warp_connector_config#tunnel_id DataCloudflareZeroTrustTunnelWarpConnectorConfigA#tunnel_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustTunnelWarpConnectorConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connector_config.DataCloudflareZeroTrustTunnelWarpConnectorConfigA;

DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connector_config.DataCloudflareZeroTrustTunnelWarpConnectorConfigA;

DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connector_config.DataCloudflareZeroTrustTunnelWarpConnectorConfigA;

DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connector_config.DataCloudflareZeroTrustTunnelWarpConnectorConfigA;

DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustTunnelWarpConnectorConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelWarpConnectorConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustTunnelWarpConnectorConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_tunnel_warp_connector_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelWarpConnectorConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.configurationVersion">configurationVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.haMode">haMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tunnelIdInput">tunnelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.config"></a>

```java
public DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference</a>

---

##### `configurationVersion`<sup>Required</sup> <a name="configurationVersion" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.configurationVersion"></a>

```java
public java.lang.Number getConfigurationVersion();
```

- *Type:* java.lang.Number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `haMode`<sup>Required</sup> <a name="haMode" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.haMode"></a>

```java
public java.lang.String getHaMode();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tunnelIdInput"></a>

```java
public java.lang.String getTunnelIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connector_config.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig;

DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .tunnelId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | UUID of the tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_tunnel_warp_connector_config#account_id DataCloudflareZeroTrustTunnelWarpConnectorConfigA#account_id}

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigAConfig.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_tunnel_warp_connector_config#tunnel_id DataCloudflareZeroTrustTunnelWarpConnectorConfigA#tunnel_id}

---

### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connector_config.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig;

DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig.builder()
    .build();
```


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connector_config.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips;

DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips.builder()
    .build();
```


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connector_config.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious;

DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connector_config.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference;

new DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrId">fnrId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vips">vips</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPrevious">vipsPrevious</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fnrId`<sup>Required</sup> <a name="fnrId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrId"></a>

```java
public java.lang.String getFnrId();
```

- *Type:* java.lang.String

---

##### `vips`<sup>Required</sup> <a name="vips" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vips"></a>

```java
public DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList getVips();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList</a>

---

##### `vipsPrevious`<sup>Required</sup> <a name="vipsPrevious" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPrevious"></a>

```java
public DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList getVipsPrevious();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfig</a>

---


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connector_config.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList;

new DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.get"></a>

```java
public DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connector_config.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference;

new DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVips</a>

---


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connector_config.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList;

new DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get"></a>

```java
public DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_tunnel_warp_connector_config.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference;

new DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectorConfig.DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">DataCloudflareZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>

---




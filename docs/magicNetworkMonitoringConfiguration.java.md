# `magicNetworkMonitoringConfiguration` Submodule <a name="`magicNetworkMonitoringConfiguration` Submodule" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicNetworkMonitoringConfiguration <a name="MagicNetworkMonitoringConfiguration" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration cloudflare_magic_network_monitoring_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_network_monitoring_configuration.MagicNetworkMonitoringConfiguration;

MagicNetworkMonitoringConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
//  .defaultSampling(java.lang.Number)
//  .routerIps(java.util.List<java.lang.String>)
//  .warpDevices(IResolvable|java.util.List<MagicNetworkMonitoringConfigurationWarpDevices>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#account_id MagicNetworkMonitoringConfiguration#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The account name. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.defaultSampling">defaultSampling</a></code> | <code>java.lang.Number</code> | Fallback sampling rate of flow messages being sent in packets per second. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.routerIps">routerIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#router_ips MagicNetworkMonitoringConfiguration#router_ips}. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.warpDevices">warpDevices</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#warp_devices MagicNetworkMonitoringConfiguration#warp_devices}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#account_id MagicNetworkMonitoringConfiguration#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#name MagicNetworkMonitoringConfiguration#name}

---

##### `defaultSampling`<sup>Optional</sup> <a name="defaultSampling" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.defaultSampling"></a>

- *Type:* java.lang.Number

Fallback sampling rate of flow messages being sent in packets per second.

This should match the packet sampling rate configured on the router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#default_sampling MagicNetworkMonitoringConfiguration#default_sampling}

---

##### `routerIps`<sup>Optional</sup> <a name="routerIps" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.routerIps"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#router_ips MagicNetworkMonitoringConfiguration#router_ips}.

---

##### `warpDevices`<sup>Optional</sup> <a name="warpDevices" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.Initializer.parameter.warpDevices"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#warp_devices MagicNetworkMonitoringConfiguration#warp_devices}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.putWarpDevices">putWarpDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetDefaultSampling">resetDefaultSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetRouterIps">resetRouterIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetWarpDevices">resetWarpDevices</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putWarpDevices` <a name="putWarpDevices" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.putWarpDevices"></a>

```java
public void putWarpDevices(IResolvable|java.util.List<MagicNetworkMonitoringConfigurationWarpDevices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.putWarpDevices.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>>

---

##### `resetDefaultSampling` <a name="resetDefaultSampling" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetDefaultSampling"></a>

```java
public void resetDefaultSampling()
```

##### `resetRouterIps` <a name="resetRouterIps" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetRouterIps"></a>

```java
public void resetRouterIps()
```

##### `resetWarpDevices` <a name="resetWarpDevices" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.resetWarpDevices"></a>

```java
public void resetWarpDevices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MagicNetworkMonitoringConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.magic_network_monitoring_configuration.MagicNetworkMonitoringConfiguration;

MagicNetworkMonitoringConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.magic_network_monitoring_configuration.MagicNetworkMonitoringConfiguration;

MagicNetworkMonitoringConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.magic_network_monitoring_configuration.MagicNetworkMonitoringConfiguration;

MagicNetworkMonitoringConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.magic_network_monitoring_configuration.MagicNetworkMonitoringConfiguration;

MagicNetworkMonitoringConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MagicNetworkMonitoringConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MagicNetworkMonitoringConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MagicNetworkMonitoringConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MagicNetworkMonitoringConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MagicNetworkMonitoringConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.warpDevices">warpDevices</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList">MagicNetworkMonitoringConfigurationWarpDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.defaultSamplingInput">defaultSamplingInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.routerIpsInput">routerIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.warpDevicesInput">warpDevicesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.defaultSampling">defaultSampling</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.routerIps">routerIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `warpDevices`<sup>Required</sup> <a name="warpDevices" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.warpDevices"></a>

```java
public MagicNetworkMonitoringConfigurationWarpDevicesList getWarpDevices();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList">MagicNetworkMonitoringConfigurationWarpDevicesList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `defaultSamplingInput`<sup>Optional</sup> <a name="defaultSamplingInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.defaultSamplingInput"></a>

```java
public java.lang.Number getDefaultSamplingInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `routerIpsInput`<sup>Optional</sup> <a name="routerIpsInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.routerIpsInput"></a>

```java
public java.util.List<java.lang.String> getRouterIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `warpDevicesInput`<sup>Optional</sup> <a name="warpDevicesInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.warpDevicesInput"></a>

```java
public IResolvable|java.util.List<MagicNetworkMonitoringConfigurationWarpDevices> getWarpDevicesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `defaultSampling`<sup>Required</sup> <a name="defaultSampling" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.defaultSampling"></a>

```java
public java.lang.Number getDefaultSampling();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `routerIps`<sup>Required</sup> <a name="routerIps" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.routerIps"></a>

```java
public java.util.List<java.lang.String> getRouterIps();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MagicNetworkMonitoringConfigurationConfig <a name="MagicNetworkMonitoringConfigurationConfig" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_network_monitoring_configuration.MagicNetworkMonitoringConfigurationConfig;

MagicNetworkMonitoringConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
//  .defaultSampling(java.lang.Number)
//  .routerIps(java.util.List<java.lang.String>)
//  .warpDevices(IResolvable|java.util.List<MagicNetworkMonitoringConfigurationWarpDevices>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#account_id MagicNetworkMonitoringConfiguration#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The account name. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.defaultSampling">defaultSampling</a></code> | <code>java.lang.Number</code> | Fallback sampling rate of flow messages being sent in packets per second. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.routerIps">routerIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#router_ips MagicNetworkMonitoringConfiguration#router_ips}. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.warpDevices">warpDevices</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#warp_devices MagicNetworkMonitoringConfiguration#warp_devices}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#account_id MagicNetworkMonitoringConfiguration#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#name MagicNetworkMonitoringConfiguration#name}

---

##### `defaultSampling`<sup>Optional</sup> <a name="defaultSampling" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.defaultSampling"></a>

```java
public java.lang.Number getDefaultSampling();
```

- *Type:* java.lang.Number

Fallback sampling rate of flow messages being sent in packets per second.

This should match the packet sampling rate configured on the router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#default_sampling MagicNetworkMonitoringConfiguration#default_sampling}

---

##### `routerIps`<sup>Optional</sup> <a name="routerIps" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.routerIps"></a>

```java
public java.util.List<java.lang.String> getRouterIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#router_ips MagicNetworkMonitoringConfiguration#router_ips}.

---

##### `warpDevices`<sup>Optional</sup> <a name="warpDevices" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationConfig.property.warpDevices"></a>

```java
public IResolvable|java.util.List<MagicNetworkMonitoringConfigurationWarpDevices> getWarpDevices();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#warp_devices MagicNetworkMonitoringConfiguration#warp_devices}.

---

### MagicNetworkMonitoringConfigurationWarpDevices <a name="MagicNetworkMonitoringConfigurationWarpDevices" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_network_monitoring_configuration.MagicNetworkMonitoringConfigurationWarpDevices;

MagicNetworkMonitoringConfigurationWarpDevices.builder()
    .id(java.lang.String)
    .name(java.lang.String)
    .routerIp(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the warp device. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices.property.name">name</a></code> | <code>java.lang.String</code> | Name of the warp device. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices.property.routerIp">routerIp</a></code> | <code>java.lang.String</code> | IPv4 CIDR of the router sourcing flow data associated with this warp device. Only /32 addresses are currently supported. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the warp device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#id MagicNetworkMonitoringConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the warp device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#name MagicNetworkMonitoringConfiguration#name}

---

##### `routerIp`<sup>Required</sup> <a name="routerIp" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices.property.routerIp"></a>

```java
public java.lang.String getRouterIp();
```

- *Type:* java.lang.String

IPv4 CIDR of the router sourcing flow data associated with this warp device. Only /32 addresses are currently supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_configuration#router_ip MagicNetworkMonitoringConfiguration#router_ip}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicNetworkMonitoringConfigurationWarpDevicesList <a name="MagicNetworkMonitoringConfigurationWarpDevicesList" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_network_monitoring_configuration.MagicNetworkMonitoringConfigurationWarpDevicesList;

new MagicNetworkMonitoringConfigurationWarpDevicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.get"></a>

```java
public MagicNetworkMonitoringConfigurationWarpDevicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MagicNetworkMonitoringConfigurationWarpDevices> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>>

---


### MagicNetworkMonitoringConfigurationWarpDevicesOutputReference <a name="MagicNetworkMonitoringConfigurationWarpDevicesOutputReference" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_network_monitoring_configuration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference;

new MagicNetworkMonitoringConfigurationWarpDevicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.routerIpInput">routerIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.routerIp">routerIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `routerIpInput`<sup>Optional</sup> <a name="routerIpInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.routerIpInput"></a>

```java
public java.lang.String getRouterIpInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `routerIp`<sup>Required</sup> <a name="routerIp" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.routerIp"></a>

```java
public java.lang.String getRouterIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevicesOutputReference.property.internalValue"></a>

```java
public IResolvable|MagicNetworkMonitoringConfigurationWarpDevices getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringConfiguration.MagicNetworkMonitoringConfigurationWarpDevices">MagicNetworkMonitoringConfigurationWarpDevices</a>

---




# `zeroTrustDeviceDeploymentGroups` Submodule <a name="`zeroTrustDeviceDeploymentGroups` Submodule" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceDeploymentGroups <a name="ZeroTrustDeviceDeploymentGroups" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups cloudflare_zero_trust_device_deployment_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_deployment_groups.ZeroTrustDeviceDeploymentGroups;

ZeroTrustDeviceDeploymentGroups.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
    .versionConfig(IResolvable|java.util.List<ZeroTrustDeviceDeploymentGroupsVersionConfig>)
//  .policyIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#account_id ZeroTrustDeviceDeploymentGroups#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-friendly name for the deployment group. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.versionConfig">versionConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>></code> | Contains at least one version configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.policyIds">policyIds</a></code> | <code>java.util.List<java.lang.String></code> | Contains an optional list of policy IDs assigned to a group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#account_id ZeroTrustDeviceDeploymentGroups#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-friendly name for the deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#name ZeroTrustDeviceDeploymentGroups#name}

---

##### `versionConfig`<sup>Required</sup> <a name="versionConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.versionConfig"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>>

Contains at least one version configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#version_config ZeroTrustDeviceDeploymentGroups#version_config}

---

##### `policyIds`<sup>Optional</sup> <a name="policyIds" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.policyIds"></a>

- *Type:* java.util.List<java.lang.String>

Contains an optional list of policy IDs assigned to a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#policy_ids ZeroTrustDeviceDeploymentGroups#policy_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.putVersionConfig">putVersionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.resetPolicyIds">resetPolicyIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVersionConfig` <a name="putVersionConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.putVersionConfig"></a>

```java
public void putVersionConfig(IResolvable|java.util.List<ZeroTrustDeviceDeploymentGroupsVersionConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.putVersionConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>>

---

##### `resetPolicyIds` <a name="resetPolicyIds" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.resetPolicyIds"></a>

```java
public void resetPolicyIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustDeviceDeploymentGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_deployment_groups.ZeroTrustDeviceDeploymentGroups;

ZeroTrustDeviceDeploymentGroups.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_deployment_groups.ZeroTrustDeviceDeploymentGroups;

ZeroTrustDeviceDeploymentGroups.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_deployment_groups.ZeroTrustDeviceDeploymentGroups;

ZeroTrustDeviceDeploymentGroups.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_deployment_groups.ZeroTrustDeviceDeploymentGroups;

ZeroTrustDeviceDeploymentGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustDeviceDeploymentGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ZeroTrustDeviceDeploymentGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustDeviceDeploymentGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustDeviceDeploymentGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceDeploymentGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.versionConfig">versionConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList">ZeroTrustDeviceDeploymentGroupsVersionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.policyIdsInput">policyIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.versionConfigInput">versionConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.policyIds">policyIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `versionConfig`<sup>Required</sup> <a name="versionConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.versionConfig"></a>

```java
public ZeroTrustDeviceDeploymentGroupsVersionConfigList getVersionConfig();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList">ZeroTrustDeviceDeploymentGroupsVersionConfigList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyIdsInput`<sup>Optional</sup> <a name="policyIdsInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.policyIdsInput"></a>

```java
public java.util.List<java.lang.String> getPolicyIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionConfigInput`<sup>Optional</sup> <a name="versionConfigInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.versionConfigInput"></a>

```java
public IResolvable|java.util.List<ZeroTrustDeviceDeploymentGroupsVersionConfig> getVersionConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyIds`<sup>Required</sup> <a name="policyIds" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.policyIds"></a>

```java
public java.util.List<java.lang.String> getPolicyIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceDeploymentGroupsConfig <a name="ZeroTrustDeviceDeploymentGroupsConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_deployment_groups.ZeroTrustDeviceDeploymentGroupsConfig;

ZeroTrustDeviceDeploymentGroupsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
    .versionConfig(IResolvable|java.util.List<ZeroTrustDeviceDeploymentGroupsVersionConfig>)
//  .policyIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#account_id ZeroTrustDeviceDeploymentGroups#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-friendly name for the deployment group. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.versionConfig">versionConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>></code> | Contains at least one version configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.policyIds">policyIds</a></code> | <code>java.util.List<java.lang.String></code> | Contains an optional list of policy IDs assigned to a group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#account_id ZeroTrustDeviceDeploymentGroups#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-friendly name for the deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#name ZeroTrustDeviceDeploymentGroups#name}

---

##### `versionConfig`<sup>Required</sup> <a name="versionConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.versionConfig"></a>

```java
public IResolvable|java.util.List<ZeroTrustDeviceDeploymentGroupsVersionConfig> getVersionConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>>

Contains at least one version configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#version_config ZeroTrustDeviceDeploymentGroups#version_config}

---

##### `policyIds`<sup>Optional</sup> <a name="policyIds" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.policyIds"></a>

```java
public java.util.List<java.lang.String> getPolicyIds();
```

- *Type:* java.util.List<java.lang.String>

Contains an optional list of policy IDs assigned to a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#policy_ids ZeroTrustDeviceDeploymentGroups#policy_ids}

---

### ZeroTrustDeviceDeploymentGroupsVersionConfig <a name="ZeroTrustDeviceDeploymentGroupsVersionConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_deployment_groups.ZeroTrustDeviceDeploymentGroupsVersionConfig;

ZeroTrustDeviceDeploymentGroupsVersionConfig.builder()
    .targetEnvironment(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig.property.targetEnvironment">targetEnvironment</a></code> | <code>java.lang.String</code> | The target environment for the client version (e.g., windows, macos). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig.property.version">version</a></code> | <code>java.lang.String</code> | The specific client version to deploy. |

---

##### `targetEnvironment`<sup>Required</sup> <a name="targetEnvironment" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig.property.targetEnvironment"></a>

```java
public java.lang.String getTargetEnvironment();
```

- *Type:* java.lang.String

The target environment for the client version (e.g., windows, macos).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#target_environment ZeroTrustDeviceDeploymentGroups#target_environment}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The specific client version to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_device_deployment_groups#version ZeroTrustDeviceDeploymentGroups#version}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceDeploymentGroupsVersionConfigList <a name="ZeroTrustDeviceDeploymentGroupsVersionConfigList" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_deployment_groups.ZeroTrustDeviceDeploymentGroupsVersionConfigList;

new ZeroTrustDeviceDeploymentGroupsVersionConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.get"></a>

```java
public ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ZeroTrustDeviceDeploymentGroupsVersionConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>>

---


### ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference <a name="ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_device_deployment_groups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference;

new ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironmentInput">targetEnvironmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironment">targetEnvironment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetEnvironmentInput`<sup>Optional</sup> <a name="targetEnvironmentInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironmentInput"></a>

```java
public java.lang.String getTargetEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `targetEnvironment`<sup>Required</sup> <a name="targetEnvironment" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironment"></a>

```java
public java.lang.String getTargetEnvironment();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ZeroTrustDeviceDeploymentGroupsVersionConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>

---




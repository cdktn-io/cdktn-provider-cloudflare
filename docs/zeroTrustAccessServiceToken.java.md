# `zeroTrustAccessServiceToken` Submodule <a name="`zeroTrustAccessServiceToken` Submodule" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessServiceToken <a name="ZeroTrustAccessServiceToken" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_service_token cloudflare_zero_trust_access_service_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_access_service_token.ZeroTrustAccessServiceToken;

ZeroTrustAccessServiceToken.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .clientSecretVersion(java.lang.Number)
//  .duration(java.lang.String)
//  .previousClientSecretExpiresAt(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the service token. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.clientSecretVersion">clientSecretVersion</a></code> | <code>java.lang.Number</code> | A version number identifying the current `client_secret` associated with the service token. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.duration">duration</a></code> | <code>java.lang.String</code> | The duration for how long the service token will be valid. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.previousClientSecretExpiresAt">previousClientSecretExpiresAt</a></code> | <code>java.lang.String</code> | The expiration of the previous `client_secret`. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_service_token#name ZeroTrustAccessServiceToken#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_service_token#account_id ZeroTrustAccessServiceToken#account_id}

---

##### `clientSecretVersion`<sup>Optional</sup> <a name="clientSecretVersion" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.clientSecretVersion"></a>

- *Type:* java.lang.Number

A version number identifying the current `client_secret` associated with the service token.

Incrementing it triggers a rotation; the previous secret will still be accepted until the time indicated by `previous_client_secret_expires_at`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_service_token#client_secret_version ZeroTrustAccessServiceToken#client_secret_version}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.duration"></a>

- *Type:* java.lang.String

The duration for how long the service token will be valid.

Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The default is 1 year in hours (8760h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_service_token#duration ZeroTrustAccessServiceToken#duration}

---

##### `previousClientSecretExpiresAt`<sup>Optional</sup> <a name="previousClientSecretExpiresAt" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.previousClientSecretExpiresAt"></a>

- *Type:* java.lang.String

The expiration of the previous `client_secret`.

This can be modified at any point after a rotation. For example, you may extend it further into the future if you need more time to update services with the new secret; or move it into the past to immediately invalidate the previous token in case of compromise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_service_token#previous_client_secret_expires_at ZeroTrustAccessServiceToken#previous_client_secret_expires_at}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_service_token#zone_id ZeroTrustAccessServiceToken#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.resetClientSecretVersion">resetClientSecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.resetPreviousClientSecretExpiresAt">resetPreviousClientSecretExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetClientSecretVersion` <a name="resetClientSecretVersion" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.resetClientSecretVersion"></a>

```java
public void resetClientSecretVersion()
```

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetPreviousClientSecretExpiresAt` <a name="resetPreviousClientSecretExpiresAt" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.resetPreviousClientSecretExpiresAt"></a>

```java
public void resetPreviousClientSecretExpiresAt()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustAccessServiceToken resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_access_service_token.ZeroTrustAccessServiceToken;

ZeroTrustAccessServiceToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_access_service_token.ZeroTrustAccessServiceToken;

ZeroTrustAccessServiceToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_access_service_token.ZeroTrustAccessServiceToken;

ZeroTrustAccessServiceToken.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_access_service_token.ZeroTrustAccessServiceToken;

ZeroTrustAccessServiceToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustAccessServiceToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ZeroTrustAccessServiceToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustAccessServiceToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustAccessServiceToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_service_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessServiceToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.clientSecretVersionInput">clientSecretVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.previousClientSecretExpiresAtInput">previousClientSecretExpiresAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.clientSecretVersion">clientSecretVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.previousClientSecretExpiresAt">previousClientSecretExpiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretVersionInput`<sup>Optional</sup> <a name="clientSecretVersionInput" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.clientSecretVersionInput"></a>

```java
public java.lang.Number getClientSecretVersionInput();
```

- *Type:* java.lang.Number

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `previousClientSecretExpiresAtInput`<sup>Optional</sup> <a name="previousClientSecretExpiresAtInput" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.previousClientSecretExpiresAtInput"></a>

```java
public java.lang.String getPreviousClientSecretExpiresAtInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.clientSecretVersion"></a>

```java
public java.lang.Number getClientSecretVersion();
```

- *Type:* java.lang.Number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `previousClientSecretExpiresAt`<sup>Required</sup> <a name="previousClientSecretExpiresAt" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.previousClientSecretExpiresAt"></a>

```java
public java.lang.String getPreviousClientSecretExpiresAt();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessServiceTokenConfig <a name="ZeroTrustAccessServiceTokenConfig" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_access_service_token.ZeroTrustAccessServiceTokenConfig;

ZeroTrustAccessServiceTokenConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .clientSecretVersion(java.lang.Number)
//  .duration(java.lang.String)
//  .previousClientSecretExpiresAt(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the service token. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.clientSecretVersion">clientSecretVersion</a></code> | <code>java.lang.Number</code> | A version number identifying the current `client_secret` associated with the service token. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.duration">duration</a></code> | <code>java.lang.String</code> | The duration for how long the service token will be valid. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.previousClientSecretExpiresAt">previousClientSecretExpiresAt</a></code> | <code>java.lang.String</code> | The expiration of the previous `client_secret`. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_service_token#name ZeroTrustAccessServiceToken#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_service_token#account_id ZeroTrustAccessServiceToken#account_id}

---

##### `clientSecretVersion`<sup>Optional</sup> <a name="clientSecretVersion" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.clientSecretVersion"></a>

```java
public java.lang.Number getClientSecretVersion();
```

- *Type:* java.lang.Number

A version number identifying the current `client_secret` associated with the service token.

Incrementing it triggers a rotation; the previous secret will still be accepted until the time indicated by `previous_client_secret_expires_at`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_service_token#client_secret_version ZeroTrustAccessServiceToken#client_secret_version}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The duration for how long the service token will be valid.

Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h. The default is 1 year in hours (8760h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_service_token#duration ZeroTrustAccessServiceToken#duration}

---

##### `previousClientSecretExpiresAt`<sup>Optional</sup> <a name="previousClientSecretExpiresAt" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.previousClientSecretExpiresAt"></a>

```java
public java.lang.String getPreviousClientSecretExpiresAt();
```

- *Type:* java.lang.String

The expiration of the previous `client_secret`.

This can be modified at any point after a rotation. For example, you may extend it further into the future if you need more time to update services with the new secret; or move it into the past to immediately invalidate the previous token in case of compromise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_service_token#previous_client_secret_expires_at ZeroTrustAccessServiceToken#previous_client_secret_expires_at}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.zeroTrustAccessServiceToken.ZeroTrustAccessServiceTokenConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/zero_trust_access_service_token#zone_id ZeroTrustAccessServiceToken#zone_id}

---




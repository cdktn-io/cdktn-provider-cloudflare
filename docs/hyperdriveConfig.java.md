# `hyperdriveConfig` Submodule <a name="`hyperdriveConfig` Submodule" id="@cdktn/provider-cloudflare.hyperdriveConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HyperdriveConfig <a name="HyperdriveConfig" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config cloudflare_hyperdrive_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.hyperdrive_config.HyperdriveConfig;

HyperdriveConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
    .origin(HyperdriveConfigOrigin)
//  .caching(HyperdriveConfigCaching)
//  .mtls(HyperdriveConfigMtls)
//  .originConnectionLimit(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Define configurations using a unique string identifier. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.origin">origin</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#origin HyperdriveConfig#origin}. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.caching">caching</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#caching HyperdriveConfig#caching}. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.mtls">mtls</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a></code> | mTLS configuration for the origin connection. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.originConnectionLimit">originConnectionLimit</a></code> | <code>java.lang.Number</code> | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Define configurations using a unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#account_id HyperdriveConfig#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#name HyperdriveConfig#name}

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.origin"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#origin HyperdriveConfig#origin}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.caching"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#caching HyperdriveConfig#caching}.

---

##### `mtls`<sup>Optional</sup> <a name="mtls" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.mtls"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a>

mTLS configuration for the origin connection.

Cannot be used with VPC Service origins; TLS must be managed on the VPC Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#mtls HyperdriveConfig#mtls}

---

##### `originConnectionLimit`<sup>Optional</sup> <a name="originConnectionLimit" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.originConnectionLimit"></a>

- *Type:* java.lang.Number

The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database.

Maximum allowed: 20 for free tier accounts, 100 for paid tier accounts.
If not specified, defaults to 20 for free tier and 60 for paid tier.
Contact Cloudflare if you need a higher limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#origin_connection_limit HyperdriveConfig#origin_connection_limit}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putCaching">putCaching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putMtls">putMtls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin">putOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetCaching">resetCaching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetMtls">resetMtls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetOriginConnectionLimit">resetOriginConnectionLimit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCaching` <a name="putCaching" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putCaching"></a>

```java
public void putCaching(HyperdriveConfigCaching value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putCaching.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a>

---

##### `putMtls` <a name="putMtls" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putMtls"></a>

```java
public void putMtls(HyperdriveConfigMtls value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putMtls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a>

---

##### `putOrigin` <a name="putOrigin" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin"></a>

```java
public void putOrigin(HyperdriveConfigOrigin value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a>

---

##### `resetCaching` <a name="resetCaching" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetCaching"></a>

```java
public void resetCaching()
```

##### `resetMtls` <a name="resetMtls" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetMtls"></a>

```java
public void resetMtls()
```

##### `resetOriginConnectionLimit` <a name="resetOriginConnectionLimit" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetOriginConnectionLimit"></a>

```java
public void resetOriginConnectionLimit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a HyperdriveConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.hyperdrive_config.HyperdriveConfig;

HyperdriveConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.hyperdrive_config.HyperdriveConfig;

HyperdriveConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.hyperdrive_config.HyperdriveConfig;

HyperdriveConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.hyperdrive_config.HyperdriveConfig;

HyperdriveConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HyperdriveConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a HyperdriveConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HyperdriveConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HyperdriveConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the HyperdriveConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.caching">caching</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference">HyperdriveConfigCachingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.mtls">mtls</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference">HyperdriveConfigMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.origin">origin</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference">HyperdriveConfigOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.cachingInput">cachingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.mtlsInput">mtlsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originConnectionLimitInput">originConnectionLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originInput">originInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originConnectionLimit">originConnectionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.caching"></a>

```java
public HyperdriveConfigCachingOutputReference getCaching();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference">HyperdriveConfigCachingOutputReference</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `mtls`<sup>Required</sup> <a name="mtls" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.mtls"></a>

```java
public HyperdriveConfigMtlsOutputReference getMtls();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference">HyperdriveConfigMtlsOutputReference</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.origin"></a>

```java
public HyperdriveConfigOriginOutputReference getOrigin();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference">HyperdriveConfigOriginOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `cachingInput`<sup>Optional</sup> <a name="cachingInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.cachingInput"></a>

```java
public IResolvable|HyperdriveConfigCaching getCachingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a>

---

##### `mtlsInput`<sup>Optional</sup> <a name="mtlsInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.mtlsInput"></a>

```java
public IResolvable|HyperdriveConfigMtls getMtlsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `originConnectionLimitInput`<sup>Optional</sup> <a name="originConnectionLimitInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originConnectionLimitInput"></a>

```java
public java.lang.Number getOriginConnectionLimitInput();
```

- *Type:* java.lang.Number

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originInput"></a>

```java
public IResolvable|HyperdriveConfigOrigin getOriginInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `originConnectionLimit`<sup>Required</sup> <a name="originConnectionLimit" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originConnectionLimit"></a>

```java
public java.lang.Number getOriginConnectionLimit();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HyperdriveConfigCaching <a name="HyperdriveConfigCaching" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.hyperdrive_config.HyperdriveConfigCaching;

HyperdriveConfigCaching.builder()
//  .disabled(java.lang.Boolean|IResolvable)
//  .maxAge(java.lang.Number)
//  .staleWhileRevalidate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to true to disable caching of SQL responses. Default is false. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | Specify the maximum duration (in seconds) items should persist in the cache. Defaults to 60 seconds if not specified. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.staleWhileRevalidate">staleWhileRevalidate</a></code> | <code>java.lang.Number</code> | Specify the number of seconds the cache may serve a stale response. Defaults to 15 seconds if not specified. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to true to disable caching of SQL responses. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#disabled HyperdriveConfig#disabled}

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

Specify the maximum duration (in seconds) items should persist in the cache. Defaults to 60 seconds if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#max_age HyperdriveConfig#max_age}

---

##### `staleWhileRevalidate`<sup>Optional</sup> <a name="staleWhileRevalidate" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.staleWhileRevalidate"></a>

```java
public java.lang.Number getStaleWhileRevalidate();
```

- *Type:* java.lang.Number

Specify the number of seconds the cache may serve a stale response. Defaults to 15 seconds if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#stale_while_revalidate HyperdriveConfig#stale_while_revalidate}

---

### HyperdriveConfigConfig <a name="HyperdriveConfigConfig" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.hyperdrive_config.HyperdriveConfigConfig;

HyperdriveConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
    .origin(HyperdriveConfigOrigin)
//  .caching(HyperdriveConfigCaching)
//  .mtls(HyperdriveConfigMtls)
//  .originConnectionLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Define configurations using a unique string identifier. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.origin">origin</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#origin HyperdriveConfig#origin}. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.caching">caching</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#caching HyperdriveConfig#caching}. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.mtls">mtls</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a></code> | mTLS configuration for the origin connection. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.originConnectionLimit">originConnectionLimit</a></code> | <code>java.lang.Number</code> | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Define configurations using a unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#account_id HyperdriveConfig#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#name HyperdriveConfig#name}

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.origin"></a>

```java
public HyperdriveConfigOrigin getOrigin();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#origin HyperdriveConfig#origin}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.caching"></a>

```java
public HyperdriveConfigCaching getCaching();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#caching HyperdriveConfig#caching}.

---

##### `mtls`<sup>Optional</sup> <a name="mtls" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.mtls"></a>

```java
public HyperdriveConfigMtls getMtls();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a>

mTLS configuration for the origin connection.

Cannot be used with VPC Service origins; TLS must be managed on the VPC Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#mtls HyperdriveConfig#mtls}

---

##### `originConnectionLimit`<sup>Optional</sup> <a name="originConnectionLimit" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.originConnectionLimit"></a>

```java
public java.lang.Number getOriginConnectionLimit();
```

- *Type:* java.lang.Number

The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database.

Maximum allowed: 20 for free tier accounts, 100 for paid tier accounts.
If not specified, defaults to 20 for free tier and 60 for paid tier.
Contact Cloudflare if you need a higher limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#origin_connection_limit HyperdriveConfig#origin_connection_limit}

---

### HyperdriveConfigMtls <a name="HyperdriveConfigMtls" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.hyperdrive_config.HyperdriveConfigMtls;

HyperdriveConfigMtls.builder()
//  .caCertificateId(java.lang.String)
//  .mtlsCertificateId(java.lang.String)
//  .sslmode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.caCertificateId">caCertificateId</a></code> | <code>java.lang.String</code> | Define CA certificate ID obtained after uploading CA cert. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.mtlsCertificateId">mtlsCertificateId</a></code> | <code>java.lang.String</code> | Define mTLS certificate ID obtained after uploading client cert. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.sslmode">sslmode</a></code> | <code>java.lang.String</code> | Set SSL mode to 'require', 'verify-ca', or 'verify-full' to verify the CA. |

---

##### `caCertificateId`<sup>Optional</sup> <a name="caCertificateId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.caCertificateId"></a>

```java
public java.lang.String getCaCertificateId();
```

- *Type:* java.lang.String

Define CA certificate ID obtained after uploading CA cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#ca_certificate_id HyperdriveConfig#ca_certificate_id}

---

##### `mtlsCertificateId`<sup>Optional</sup> <a name="mtlsCertificateId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.mtlsCertificateId"></a>

```java
public java.lang.String getMtlsCertificateId();
```

- *Type:* java.lang.String

Define mTLS certificate ID obtained after uploading client cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#mtls_certificate_id HyperdriveConfig#mtls_certificate_id}

---

##### `sslmode`<sup>Optional</sup> <a name="sslmode" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.sslmode"></a>

```java
public java.lang.String getSslmode();
```

- *Type:* java.lang.String

Set SSL mode to 'require', 'verify-ca', or 'verify-full' to verify the CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#sslmode HyperdriveConfig#sslmode}

---

### HyperdriveConfigOrigin <a name="HyperdriveConfigOrigin" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.hyperdrive_config.HyperdriveConfigOrigin;

HyperdriveConfigOrigin.builder()
    .database(java.lang.String)
    .password(java.lang.String)
    .scheme(java.lang.String)
    .user(java.lang.String)
//  .accessClientId(java.lang.String)
//  .accessClientSecret(java.lang.String)
//  .host(java.lang.String)
//  .port(java.lang.Number)
//  .serviceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.database">database</a></code> | <code>java.lang.String</code> | Set the name of your origin database. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.password">password</a></code> | <code>java.lang.String</code> | Set the password needed to access your origin database. The API never returns this write-only value. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.scheme">scheme</a></code> | <code>java.lang.String</code> | Specifies the URL scheme used to connect to your origin database. Available values: "postgres", "postgresql", "mysql". |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.user">user</a></code> | <code>java.lang.String</code> | Set the user of your origin database. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.accessClientId">accessClientId</a></code> | <code>java.lang.String</code> | Defines the Client ID of the Access token to use when connecting to the origin database. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.accessClientSecret">accessClientSecret</a></code> | <code>java.lang.String</code> | Defines the Client Secret of the Access Token to use when connecting to the origin database. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.host">host</a></code> | <code>java.lang.String</code> | Defines the host (hostname or IP) of your origin database. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.port">port</a></code> | <code>java.lang.Number</code> | Defines the port of your origin database. Defaults to 5432 for PostgreSQL or 3306 for MySQL if not specified. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The identifier of the Workers VPC Service to connect through. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Set the name of your origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#database HyperdriveConfig#database}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Set the password needed to access your origin database. The API never returns this write-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#password HyperdriveConfig#password}

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

Specifies the URL scheme used to connect to your origin database. Available values: "postgres", "postgresql", "mysql".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#scheme HyperdriveConfig#scheme}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

Set the user of your origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#user HyperdriveConfig#user}

---

##### `accessClientId`<sup>Optional</sup> <a name="accessClientId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.accessClientId"></a>

```java
public java.lang.String getAccessClientId();
```

- *Type:* java.lang.String

Defines the Client ID of the Access token to use when connecting to the origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#access_client_id HyperdriveConfig#access_client_id}

---

##### `accessClientSecret`<sup>Optional</sup> <a name="accessClientSecret" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.accessClientSecret"></a>

```java
public java.lang.String getAccessClientSecret();
```

- *Type:* java.lang.String

Defines the Client Secret of the Access Token to use when connecting to the origin database.

The API never returns this write-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#access_client_secret HyperdriveConfig#access_client_secret}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Defines the host (hostname or IP) of your origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#host HyperdriveConfig#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Defines the port of your origin database. Defaults to 5432 for PostgreSQL or 3306 for MySQL if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#port HyperdriveConfig#port}

---

##### `serviceId`<sup>Optional</sup> <a name="serviceId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

The identifier of the Workers VPC Service to connect through.

Hyperdrive will egress through the specified VPC Service to reach the origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/hyperdrive_config#service_id HyperdriveConfig#service_id}

---

## Classes <a name="Classes" id="Classes"></a>

### HyperdriveConfigCachingOutputReference <a name="HyperdriveConfigCachingOutputReference" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.hyperdrive_config.HyperdriveConfigCachingOutputReference;

new HyperdriveConfigCachingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetStaleWhileRevalidate">resetStaleWhileRevalidate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetMaxAge"></a>

```java
public void resetMaxAge()
```

##### `resetStaleWhileRevalidate` <a name="resetStaleWhileRevalidate" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetStaleWhileRevalidate"></a>

```java
public void resetStaleWhileRevalidate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.staleWhileRevalidateInput">staleWhileRevalidateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.staleWhileRevalidate">staleWhileRevalidate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.maxAgeInput"></a>

```java
public java.lang.Number getMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `staleWhileRevalidateInput`<sup>Optional</sup> <a name="staleWhileRevalidateInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.staleWhileRevalidateInput"></a>

```java
public java.lang.Number getStaleWhileRevalidateInput();
```

- *Type:* java.lang.Number

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `staleWhileRevalidate`<sup>Required</sup> <a name="staleWhileRevalidate" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.staleWhileRevalidate"></a>

```java
public java.lang.Number getStaleWhileRevalidate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.internalValue"></a>

```java
public IResolvable|HyperdriveConfigCaching getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a>

---


### HyperdriveConfigMtlsOutputReference <a name="HyperdriveConfigMtlsOutputReference" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.hyperdrive_config.HyperdriveConfigMtlsOutputReference;

new HyperdriveConfigMtlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetCaCertificateId">resetCaCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetMtlsCertificateId">resetMtlsCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetSslmode">resetSslmode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCertificateId` <a name="resetCaCertificateId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetCaCertificateId"></a>

```java
public void resetCaCertificateId()
```

##### `resetMtlsCertificateId` <a name="resetMtlsCertificateId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetMtlsCertificateId"></a>

```java
public void resetMtlsCertificateId()
```

##### `resetSslmode` <a name="resetSslmode" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetSslmode"></a>

```java
public void resetSslmode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.caCertificateIdInput">caCertificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.mtlsCertificateIdInput">mtlsCertificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.sslmodeInput">sslmodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.caCertificateId">caCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.mtlsCertificateId">mtlsCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.sslmode">sslmode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCertificateIdInput`<sup>Optional</sup> <a name="caCertificateIdInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.caCertificateIdInput"></a>

```java
public java.lang.String getCaCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `mtlsCertificateIdInput`<sup>Optional</sup> <a name="mtlsCertificateIdInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.mtlsCertificateIdInput"></a>

```java
public java.lang.String getMtlsCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `sslmodeInput`<sup>Optional</sup> <a name="sslmodeInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.sslmodeInput"></a>

```java
public java.lang.String getSslmodeInput();
```

- *Type:* java.lang.String

---

##### `caCertificateId`<sup>Required</sup> <a name="caCertificateId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.caCertificateId"></a>

```java
public java.lang.String getCaCertificateId();
```

- *Type:* java.lang.String

---

##### `mtlsCertificateId`<sup>Required</sup> <a name="mtlsCertificateId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.mtlsCertificateId"></a>

```java
public java.lang.String getMtlsCertificateId();
```

- *Type:* java.lang.String

---

##### `sslmode`<sup>Required</sup> <a name="sslmode" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.sslmode"></a>

```java
public java.lang.String getSslmode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.internalValue"></a>

```java
public IResolvable|HyperdriveConfigMtls getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a>

---


### HyperdriveConfigOriginOutputReference <a name="HyperdriveConfigOriginOutputReference" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.hyperdrive_config.HyperdriveConfigOriginOutputReference;

new HyperdriveConfigOriginOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetAccessClientId">resetAccessClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetAccessClientSecret">resetAccessClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetServiceId">resetServiceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessClientId` <a name="resetAccessClientId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetAccessClientId"></a>

```java
public void resetAccessClientId()
```

##### `resetAccessClientSecret` <a name="resetAccessClientSecret" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetAccessClientSecret"></a>

```java
public void resetAccessClientSecret()
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetServiceId` <a name="resetServiceId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetServiceId"></a>

```java
public void resetServiceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientIdInput">accessClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientSecretInput">accessClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientId">accessClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientSecret">accessClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessClientIdInput`<sup>Optional</sup> <a name="accessClientIdInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientIdInput"></a>

```java
public java.lang.String getAccessClientIdInput();
```

- *Type:* java.lang.String

---

##### `accessClientSecretInput`<sup>Optional</sup> <a name="accessClientSecretInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientSecretInput"></a>

```java
public java.lang.String getAccessClientSecretInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `accessClientId`<sup>Required</sup> <a name="accessClientId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientId"></a>

```java
public java.lang.String getAccessClientId();
```

- *Type:* java.lang.String

---

##### `accessClientSecret`<sup>Required</sup> <a name="accessClientSecret" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientSecret"></a>

```java
public java.lang.String getAccessClientSecret();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.internalValue"></a>

```java
public IResolvable|HyperdriveConfigOrigin getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a>

---




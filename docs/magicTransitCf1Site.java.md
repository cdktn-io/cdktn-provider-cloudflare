# `magicTransitCf1Site` Submodule <a name="`magicTransitCf1Site` Submodule" id="@cdktn/provider-cloudflare.magicTransitCf1Site"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitCf1Site <a name="MagicTransitCf1Site" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site cloudflare_magic_transit_cf1_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_cf1_site.MagicTransitCf1Site;

MagicTransitCf1Site.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .body(IResolvable|java.util.List<MagicTransitCf1SiteBody>)
//  .description(java.lang.String)
//  .location(MagicTransitCf1SiteLocation)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.body">body</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#body MagicTransitCf1Site#body}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-provided description of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A human-provided name describing the CF1 Site that should be unique within the account. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#account_id MagicTransitCf1Site#account_id}

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.body"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#body MagicTransitCf1Site#body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-provided description of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#description MagicTransitCf1Site#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A human-provided name describing the CF1 Site that should be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putBody">putBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBody` <a name="putBody" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putBody"></a>

```java
public void putBody(IResolvable|java.util.List<MagicTransitCf1SiteBody> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putBody.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>>

---

##### `putLocation` <a name="putLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation"></a>

```java
public void putLocation(MagicTransitCf1SiteLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MagicTransitCf1Site resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_cf1_site.MagicTransitCf1Site;

MagicTransitCf1Site.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_cf1_site.MagicTransitCf1Site;

MagicTransitCf1Site.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_cf1_site.MagicTransitCf1Site;

MagicTransitCf1Site.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_cf1_site.MagicTransitCf1Site;

MagicTransitCf1Site.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MagicTransitCf1Site.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MagicTransitCf1Site resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MagicTransitCf1Site to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MagicTransitCf1Site that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MagicTransitCf1Site to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.body">body</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList">MagicTransitCf1SiteBodyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference">MagicTransitCf1SiteLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.bodyInput">bodyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.locationInput">locationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.body"></a>

```java
public MagicTransitCf1SiteBodyList getBody();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList">MagicTransitCf1SiteBodyList</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.location"></a>

```java
public MagicTransitCf1SiteLocationOutputReference getLocation();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference">MagicTransitCf1SiteLocationOutputReference</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.bodyInput"></a>

```java
public IResolvable|java.util.List<MagicTransitCf1SiteBody> getBodyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.locationInput"></a>

```java
public IResolvable|MagicTransitCf1SiteLocation getLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitCf1SiteBody <a name="MagicTransitCf1SiteBody" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_cf1_site.MagicTransitCf1SiteBody;

MagicTransitCf1SiteBody.builder()
    .name(java.lang.String)
//  .description(java.lang.String)
//  .location(MagicTransitCf1SiteBodyLocation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.name">name</a></code> | <code>java.lang.String</code> | A human-provided name describing the CF1 Site that should be unique within the account. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.description">description</a></code> | <code>java.lang.String</code> | A human-provided description of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A human-provided name describing the CF1 Site that should be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-provided description of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#description MagicTransitCf1Site#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.location"></a>

```java
public MagicTransitCf1SiteBodyLocation getLocation();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}.

---

### MagicTransitCf1SiteBodyLocation <a name="MagicTransitCf1SiteBodyLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_cf1_site.MagicTransitCf1SiteBodyLocation;

MagicTransitCf1SiteBodyLocation.builder()
//  .lat(java.lang.Number)
//  .long(java.lang.Number)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.lat">lat</a></code> | <code>java.lang.Number</code> | Latitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.long">long</a></code> | <code>java.lang.Number</code> | Longitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.name">name</a></code> | <code>java.lang.String</code> | Name of nearest town, city, or village. |

---

##### `lat`<sup>Optional</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.lat"></a>

```java
public java.lang.Number getLat();
```

- *Type:* java.lang.Number

Latitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#lat MagicTransitCf1Site#lat}

---

##### `long`<sup>Optional</sup> <a name="long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.long"></a>

```java
public java.lang.Number getLong();
```

- *Type:* java.lang.Number

Longitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#long MagicTransitCf1Site#long}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of nearest town, city, or village.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

### MagicTransitCf1SiteConfig <a name="MagicTransitCf1SiteConfig" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_cf1_site.MagicTransitCf1SiteConfig;

MagicTransitCf1SiteConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .body(IResolvable|java.util.List<MagicTransitCf1SiteBody>)
//  .description(java.lang.String)
//  .location(MagicTransitCf1SiteLocation)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.body">body</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#body MagicTransitCf1Site#body}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-provided description of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.name">name</a></code> | <code>java.lang.String</code> | A human-provided name describing the CF1 Site that should be unique within the account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#account_id MagicTransitCf1Site#account_id}

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.body"></a>

```java
public IResolvable|java.util.List<MagicTransitCf1SiteBody> getBody();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#body MagicTransitCf1Site#body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-provided description of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#description MagicTransitCf1Site#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.location"></a>

```java
public MagicTransitCf1SiteLocation getLocation();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A human-provided name describing the CF1 Site that should be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

### MagicTransitCf1SiteLocation <a name="MagicTransitCf1SiteLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_cf1_site.MagicTransitCf1SiteLocation;

MagicTransitCf1SiteLocation.builder()
//  .lat(java.lang.Number)
//  .long(java.lang.Number)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.lat">lat</a></code> | <code>java.lang.Number</code> | Latitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.long">long</a></code> | <code>java.lang.Number</code> | Longitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.name">name</a></code> | <code>java.lang.String</code> | Name of nearest town, city, or village. |

---

##### `lat`<sup>Optional</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.lat"></a>

```java
public java.lang.Number getLat();
```

- *Type:* java.lang.Number

Latitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#lat MagicTransitCf1Site#lat}

---

##### `long`<sup>Optional</sup> <a name="long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.long"></a>

```java
public java.lang.Number getLong();
```

- *Type:* java.lang.Number

Longitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#long MagicTransitCf1Site#long}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of nearest town, city, or village.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitCf1SiteBodyList <a name="MagicTransitCf1SiteBodyList" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_cf1_site.MagicTransitCf1SiteBodyList;

new MagicTransitCf1SiteBodyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.get"></a>

```java
public MagicTransitCf1SiteBodyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MagicTransitCf1SiteBody> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>>

---


### MagicTransitCf1SiteBodyLocationOutputReference <a name="MagicTransitCf1SiteBodyLocationOutputReference" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_cf1_site.MagicTransitCf1SiteBodyLocationOutputReference;

new MagicTransitCf1SiteBodyLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLat">resetLat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLong">resetLong</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLat` <a name="resetLat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLat"></a>

```java
public void resetLat()
```

##### `resetLong` <a name="resetLong" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLong"></a>

```java
public void resetLong()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.latInput">latInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.longInput">longInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.lat">lat</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.long">long</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `latInput`<sup>Optional</sup> <a name="latInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.latInput"></a>

```java
public java.lang.Number getLatInput();
```

- *Type:* java.lang.Number

---

##### `longInput`<sup>Optional</sup> <a name="longInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.longInput"></a>

```java
public java.lang.Number getLongInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `lat`<sup>Required</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.lat"></a>

```java
public java.lang.Number getLat();
```

- *Type:* java.lang.Number

---

##### `long`<sup>Required</sup> <a name="long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.long"></a>

```java
public java.lang.Number getLong();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|MagicTransitCf1SiteBodyLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

---


### MagicTransitCf1SiteBodyOutputReference <a name="MagicTransitCf1SiteBodyOutputReference" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_cf1_site.MagicTransitCf1SiteBodyOutputReference;

new MagicTransitCf1SiteBodyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetLocation">resetLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocation` <a name="putLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation"></a>

```java
public void putLocation(MagicTransitCf1SiteBodyLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetLocation"></a>

```java
public void resetLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference">MagicTransitCf1SiteBodyLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.locationInput">locationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.location"></a>

```java
public MagicTransitCf1SiteBodyLocationOutputReference getLocation();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference">MagicTransitCf1SiteBodyLocationOutputReference</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.locationInput"></a>

```java
public IResolvable|MagicTransitCf1SiteBodyLocation getLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.internalValue"></a>

```java
public IResolvable|MagicTransitCf1SiteBody getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>

---


### MagicTransitCf1SiteLocationOutputReference <a name="MagicTransitCf1SiteLocationOutputReference" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_cf1_site.MagicTransitCf1SiteLocationOutputReference;

new MagicTransitCf1SiteLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLat">resetLat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLong">resetLong</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLat` <a name="resetLat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLat"></a>

```java
public void resetLat()
```

##### `resetLong` <a name="resetLong" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLong"></a>

```java
public void resetLong()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.latInput">latInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.longInput">longInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.lat">lat</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.long">long</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `latInput`<sup>Optional</sup> <a name="latInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.latInput"></a>

```java
public java.lang.Number getLatInput();
```

- *Type:* java.lang.Number

---

##### `longInput`<sup>Optional</sup> <a name="longInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.longInput"></a>

```java
public java.lang.Number getLongInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `lat`<sup>Required</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.lat"></a>

```java
public java.lang.Number getLat();
```

- *Type:* java.lang.Number

---

##### `long`<sup>Required</sup> <a name="long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.long"></a>

```java
public java.lang.Number getLong();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|MagicTransitCf1SiteLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

---




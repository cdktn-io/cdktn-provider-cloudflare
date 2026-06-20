# `magicTransitSite` Submodule <a name="`magicTransitSite` Submodule" id="@cdktn/provider-cloudflare.magicTransitSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitSite <a name="MagicTransitSite" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site cloudflare_magic_transit_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site.MagicTransitSite;

MagicTransitSite.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
//  .connectorId(java.lang.String)
//  .description(java.lang.String)
//  .haMode(java.lang.Boolean|IResolvable)
//  .location(MagicTransitSiteLocation)
//  .secondaryConnectorId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.connectorId">connectorId</a></code> | <code>java.lang.String</code> | Magic Connector identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#description MagicTransitSite#description}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.haMode">haMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Site high availability mode. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a></code> | Location of site in latitude and longitude. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.secondaryConnectorId">secondaryConnectorId</a></code> | <code>java.lang.String</code> | Magic Connector identifier tag. Used when high availability mode is on. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#account_id MagicTransitSite#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#name MagicTransitSite#name}

---

##### `connectorId`<sup>Optional</sup> <a name="connectorId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.connectorId"></a>

- *Type:* java.lang.String

Magic Connector identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#connector_id MagicTransitSite#connector_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#description MagicTransitSite#description}.

---

##### `haMode`<sup>Optional</sup> <a name="haMode" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.haMode"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Site high availability mode.

If set to true, the site can have two connectors and runs in high availability mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#ha_mode MagicTransitSite#ha_mode}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a>

Location of site in latitude and longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#location MagicTransitSite#location}

---

##### `secondaryConnectorId`<sup>Optional</sup> <a name="secondaryConnectorId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.Initializer.parameter.secondaryConnectorId"></a>

- *Type:* java.lang.String

Magic Connector identifier tag. Used when high availability mode is on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#secondary_connector_id MagicTransitSite#secondary_connector_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.resetConnectorId">resetConnectorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.resetHaMode">resetHaMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.resetSecondaryConnectorId">resetSecondaryConnectorId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocation` <a name="putLocation" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.putLocation"></a>

```java
public void putLocation(MagicTransitSiteLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a>

---

##### `resetConnectorId` <a name="resetConnectorId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.resetConnectorId"></a>

```java
public void resetConnectorId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHaMode` <a name="resetHaMode" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.resetHaMode"></a>

```java
public void resetHaMode()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetSecondaryConnectorId` <a name="resetSecondaryConnectorId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.resetSecondaryConnectorId"></a>

```java
public void resetSecondaryConnectorId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MagicTransitSite resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site.MagicTransitSite;

MagicTransitSite.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site.MagicTransitSite;

MagicTransitSite.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site.MagicTransitSite;

MagicTransitSite.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site.MagicTransitSite;

MagicTransitSite.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MagicTransitSite.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MagicTransitSite resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MagicTransitSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MagicTransitSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MagicTransitSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference">MagicTransitSiteLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connectorIdInput">connectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.haModeInput">haModeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.locationInput">locationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.secondaryConnectorIdInput">secondaryConnectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connectorId">connectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.haMode">haMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.secondaryConnectorId">secondaryConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.location"></a>

```java
public MagicTransitSiteLocationOutputReference getLocation();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference">MagicTransitSiteLocationOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `connectorIdInput`<sup>Optional</sup> <a name="connectorIdInput" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connectorIdInput"></a>

```java
public java.lang.String getConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `haModeInput`<sup>Optional</sup> <a name="haModeInput" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.haModeInput"></a>

```java
public java.lang.Boolean|IResolvable getHaModeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.locationInput"></a>

```java
public IResolvable|MagicTransitSiteLocation getLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secondaryConnectorIdInput`<sup>Optional</sup> <a name="secondaryConnectorIdInput" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.secondaryConnectorIdInput"></a>

```java
public java.lang.String getSecondaryConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.connectorId"></a>

```java
public java.lang.String getConnectorId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `haMode`<sup>Required</sup> <a name="haMode" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.haMode"></a>

```java
public java.lang.Boolean|IResolvable getHaMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secondaryConnectorId`<sup>Required</sup> <a name="secondaryConnectorId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.secondaryConnectorId"></a>

```java
public java.lang.String getSecondaryConnectorId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSite.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitSiteConfig <a name="MagicTransitSiteConfig" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site.MagicTransitSiteConfig;

MagicTransitSiteConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
//  .connectorId(java.lang.String)
//  .description(java.lang.String)
//  .haMode(java.lang.Boolean|IResolvable)
//  .location(MagicTransitSiteLocation)
//  .secondaryConnectorId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.connectorId">connectorId</a></code> | <code>java.lang.String</code> | Magic Connector identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#description MagicTransitSite#description}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.haMode">haMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Site high availability mode. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a></code> | Location of site in latitude and longitude. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.secondaryConnectorId">secondaryConnectorId</a></code> | <code>java.lang.String</code> | Magic Connector identifier tag. Used when high availability mode is on. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#account_id MagicTransitSite#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#name MagicTransitSite#name}

---

##### `connectorId`<sup>Optional</sup> <a name="connectorId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.connectorId"></a>

```java
public java.lang.String getConnectorId();
```

- *Type:* java.lang.String

Magic Connector identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#connector_id MagicTransitSite#connector_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#description MagicTransitSite#description}.

---

##### `haMode`<sup>Optional</sup> <a name="haMode" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.haMode"></a>

```java
public java.lang.Boolean|IResolvable getHaMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Site high availability mode.

If set to true, the site can have two connectors and runs in high availability mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#ha_mode MagicTransitSite#ha_mode}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.location"></a>

```java
public MagicTransitSiteLocation getLocation();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a>

Location of site in latitude and longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#location MagicTransitSite#location}

---

##### `secondaryConnectorId`<sup>Optional</sup> <a name="secondaryConnectorId" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteConfig.property.secondaryConnectorId"></a>

```java
public java.lang.String getSecondaryConnectorId();
```

- *Type:* java.lang.String

Magic Connector identifier tag. Used when high availability mode is on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#secondary_connector_id MagicTransitSite#secondary_connector_id}

---

### MagicTransitSiteLocation <a name="MagicTransitSiteLocation" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site.MagicTransitSiteLocation;

MagicTransitSiteLocation.builder()
//  .lat(java.lang.String)
//  .lon(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation.property.lat">lat</a></code> | <code>java.lang.String</code> | Latitude. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation.property.lon">lon</a></code> | <code>java.lang.String</code> | Longitude. |

---

##### `lat`<sup>Optional</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation.property.lat"></a>

```java
public java.lang.String getLat();
```

- *Type:* java.lang.String

Latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#lat MagicTransitSite#lat}

---

##### `lon`<sup>Optional</sup> <a name="lon" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation.property.lon"></a>

```java
public java.lang.String getLon();
```

- *Type:* java.lang.String

Longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_site#lon MagicTransitSite#lon}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitSiteLocationOutputReference <a name="MagicTransitSiteLocationOutputReference" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site.MagicTransitSiteLocationOutputReference;

new MagicTransitSiteLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resetLat">resetLat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resetLon">resetLon</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLat` <a name="resetLat" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resetLat"></a>

```java
public void resetLat()
```

##### `resetLon` <a name="resetLon" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.resetLon"></a>

```java
public void resetLon()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.latInput">latInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lonInput">lonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lat">lat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lon">lon</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `latInput`<sup>Optional</sup> <a name="latInput" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.latInput"></a>

```java
public java.lang.String getLatInput();
```

- *Type:* java.lang.String

---

##### `lonInput`<sup>Optional</sup> <a name="lonInput" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lonInput"></a>

```java
public java.lang.String getLonInput();
```

- *Type:* java.lang.String

---

##### `lat`<sup>Required</sup> <a name="lat" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lat"></a>

```java
public java.lang.String getLat();
```

- *Type:* java.lang.String

---

##### `lon`<sup>Required</sup> <a name="lon" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.lon"></a>

```java
public java.lang.String getLon();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|MagicTransitSiteLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitSite.MagicTransitSiteLocation">MagicTransitSiteLocation</a>

---




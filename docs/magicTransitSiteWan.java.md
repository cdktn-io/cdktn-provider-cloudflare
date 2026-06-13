# `magicTransitSiteWan` Submodule <a name="`magicTransitSiteWan` Submodule" id="@cdktn/provider-cloudflare.magicTransitSiteWan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitSiteWan <a name="MagicTransitSiteWan" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan cloudflare_magic_transit_site_wan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site_wan.MagicTransitSiteWan;

MagicTransitSiteWan.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .physport(java.lang.Number)
    .siteId(java.lang.String)
//  .name(java.lang.String)
//  .priority(java.lang.Number)
//  .staticAddressing(MagicTransitSiteWanStaticAddressing)
//  .vlanTag(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.physport">physport</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.siteId">siteId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.staticAddressing">staticAddressing</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a></code> | (optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.vlanTag">vlanTag</a></code> | <code>java.lang.Number</code> | VLAN ID. Use zero for untagged. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#account_id MagicTransitSiteWan#account_id}

---

##### `physport`<sup>Required</sup> <a name="physport" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.physport"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}.

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.siteId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#site_id MagicTransitSiteWan#site_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}.

---

##### `staticAddressing`<sup>Optional</sup> <a name="staticAddressing" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.staticAddressing"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

(optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#static_addressing MagicTransitSiteWan#static_addressing}

---

##### `vlanTag`<sup>Optional</sup> <a name="vlanTag" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.vlanTag"></a>

- *Type:* java.lang.Number

VLAN ID. Use zero for untagged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#vlan_tag MagicTransitSiteWan#vlan_tag}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing">putStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetStaticAddressing">resetStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetVlanTag">resetVlanTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStaticAddressing` <a name="putStaticAddressing" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing"></a>

```java
public void putStaticAddressing(MagicTransitSiteWanStaticAddressing value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetName"></a>

```java
public void resetName()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetStaticAddressing` <a name="resetStaticAddressing" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetStaticAddressing"></a>

```java
public void resetStaticAddressing()
```

##### `resetVlanTag` <a name="resetVlanTag" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetVlanTag"></a>

```java
public void resetVlanTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MagicTransitSiteWan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site_wan.MagicTransitSiteWan;

MagicTransitSiteWan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site_wan.MagicTransitSiteWan;

MagicTransitSiteWan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site_wan.MagicTransitSiteWan;

MagicTransitSiteWan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site_wan.MagicTransitSiteWan;

MagicTransitSiteWan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MagicTransitSiteWan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MagicTransitSiteWan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MagicTransitSiteWan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MagicTransitSiteWan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MagicTransitSiteWan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.healthCheckRate">healthCheckRate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressing">staticAddressing</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference">MagicTransitSiteWanStaticAddressingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physportInput">physportInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteIdInput">siteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressingInput">staticAddressingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTagInput">vlanTagInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physport">physport</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTag">vlanTag</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `healthCheckRate`<sup>Required</sup> <a name="healthCheckRate" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.healthCheckRate"></a>

```java
public java.lang.String getHealthCheckRate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `staticAddressing`<sup>Required</sup> <a name="staticAddressing" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressing"></a>

```java
public MagicTransitSiteWanStaticAddressingOutputReference getStaticAddressing();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference">MagicTransitSiteWanStaticAddressingOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `physportInput`<sup>Optional</sup> <a name="physportInput" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physportInput"></a>

```java
public java.lang.Number getPhysportInput();
```

- *Type:* java.lang.Number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteIdInput"></a>

```java
public java.lang.String getSiteIdInput();
```

- *Type:* java.lang.String

---

##### `staticAddressingInput`<sup>Optional</sup> <a name="staticAddressingInput" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressingInput"></a>

```java
public IResolvable|MagicTransitSiteWanStaticAddressing getStaticAddressingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

---

##### `vlanTagInput`<sup>Optional</sup> <a name="vlanTagInput" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTagInput"></a>

```java
public java.lang.Number getVlanTagInput();
```

- *Type:* java.lang.Number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `physport`<sup>Required</sup> <a name="physport" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physport"></a>

```java
public java.lang.Number getPhysport();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

##### `vlanTag`<sup>Required</sup> <a name="vlanTag" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTag"></a>

```java
public java.lang.Number getVlanTag();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitSiteWanConfig <a name="MagicTransitSiteWanConfig" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site_wan.MagicTransitSiteWanConfig;

MagicTransitSiteWanConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .physport(java.lang.Number)
    .siteId(java.lang.String)
//  .name(java.lang.String)
//  .priority(java.lang.Number)
//  .staticAddressing(MagicTransitSiteWanStaticAddressing)
//  .vlanTag(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.physport">physport</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.siteId">siteId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.staticAddressing">staticAddressing</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a></code> | (optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.vlanTag">vlanTag</a></code> | <code>java.lang.Number</code> | VLAN ID. Use zero for untagged. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#account_id MagicTransitSiteWan#account_id}

---

##### `physport`<sup>Required</sup> <a name="physport" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.physport"></a>

```java
public java.lang.Number getPhysport();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}.

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#site_id MagicTransitSiteWan#site_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}.

---

##### `staticAddressing`<sup>Optional</sup> <a name="staticAddressing" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.staticAddressing"></a>

```java
public MagicTransitSiteWanStaticAddressing getStaticAddressing();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

(optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#static_addressing MagicTransitSiteWan#static_addressing}

---

##### `vlanTag`<sup>Optional</sup> <a name="vlanTag" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.vlanTag"></a>

```java
public java.lang.Number getVlanTag();
```

- *Type:* java.lang.Number

VLAN ID. Use zero for untagged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#vlan_tag MagicTransitSiteWan#vlan_tag}

---

### MagicTransitSiteWanStaticAddressing <a name="MagicTransitSiteWanStaticAddressing" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site_wan.MagicTransitSiteWanStaticAddressing;

MagicTransitSiteWanStaticAddressing.builder()
    .address(java.lang.String)
    .gatewayAddress(java.lang.String)
//  .secondaryAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.address">address</a></code> | <code>java.lang.String</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.gatewayAddress">gatewayAddress</a></code> | <code>java.lang.String</code> | A valid IPv4 address. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.secondaryAddress">secondaryAddress</a></code> | <code>java.lang.String</code> | A valid CIDR notation representing an IP range. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#address MagicTransitSiteWan#address}

---

##### `gatewayAddress`<sup>Required</sup> <a name="gatewayAddress" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.gatewayAddress"></a>

```java
public java.lang.String getGatewayAddress();
```

- *Type:* java.lang.String

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#gateway_address MagicTransitSiteWan#gateway_address}

---

##### `secondaryAddress`<sup>Optional</sup> <a name="secondaryAddress" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.secondaryAddress"></a>

```java
public java.lang.String getSecondaryAddress();
```

- *Type:* java.lang.String

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/magic_transit_site_wan#secondary_address MagicTransitSiteWan#secondary_address}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitSiteWanStaticAddressingOutputReference <a name="MagicTransitSiteWanStaticAddressingOutputReference" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.magic_transit_site_wan.MagicTransitSiteWanStaticAddressingOutputReference;

new MagicTransitSiteWanStaticAddressingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resetSecondaryAddress">resetSecondaryAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecondaryAddress` <a name="resetSecondaryAddress" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resetSecondaryAddress"></a>

```java
public void resetSecondaryAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddressInput">gatewayAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddressInput">secondaryAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddress">gatewayAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddress">secondaryAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `gatewayAddressInput`<sup>Optional</sup> <a name="gatewayAddressInput" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddressInput"></a>

```java
public java.lang.String getGatewayAddressInput();
```

- *Type:* java.lang.String

---

##### `secondaryAddressInput`<sup>Optional</sup> <a name="secondaryAddressInput" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddressInput"></a>

```java
public java.lang.String getSecondaryAddressInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `gatewayAddress`<sup>Required</sup> <a name="gatewayAddress" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddress"></a>

```java
public java.lang.String getGatewayAddress();
```

- *Type:* java.lang.String

---

##### `secondaryAddress`<sup>Required</sup> <a name="secondaryAddress" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddress"></a>

```java
public java.lang.String getSecondaryAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.internalValue"></a>

```java
public IResolvable|MagicTransitSiteWanStaticAddressing getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

---




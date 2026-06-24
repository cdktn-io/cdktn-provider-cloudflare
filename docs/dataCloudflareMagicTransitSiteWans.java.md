# `dataCloudflareMagicTransitSiteWans` Submodule <a name="`dataCloudflareMagicTransitSiteWans` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitSiteWans <a name="DataCloudflareMagicTransitSiteWans" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_transit_site_wans cloudflare_magic_transit_site_wans}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_wans.DataCloudflareMagicTransitSiteWans;

DataCloudflareMagicTransitSiteWans.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .siteId(java.lang.String)
//  .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.siteId">siteId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.siteId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_transit_site_wans#site_id DataCloudflareMagicTransitSiteWans#site_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_transit_site_wans#account_id DataCloudflareMagicTransitSiteWans#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_transit_site_wans#max_items DataCloudflareMagicTransitSiteWans#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.resetMaxItems"></a>

```java
public void resetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareMagicTransitSiteWans resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_wans.DataCloudflareMagicTransitSiteWans;

DataCloudflareMagicTransitSiteWans.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_wans.DataCloudflareMagicTransitSiteWans;

DataCloudflareMagicTransitSiteWans.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_wans.DataCloudflareMagicTransitSiteWans;

DataCloudflareMagicTransitSiteWans.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_wans.DataCloudflareMagicTransitSiteWans;

DataCloudflareMagicTransitSiteWans.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareMagicTransitSiteWans.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareMagicTransitSiteWans resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareMagicTransitSiteWans to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareMagicTransitSiteWans that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_transit_site_wans#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitSiteWans to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList">DataCloudflareMagicTransitSiteWansResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.siteIdInput">siteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.result"></a>

```java
public DataCloudflareMagicTransitSiteWansResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList">DataCloudflareMagicTransitSiteWansResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.siteIdInput"></a>

```java
public java.lang.String getSiteIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWans.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitSiteWansConfig <a name="DataCloudflareMagicTransitSiteWansConfig" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_wans.DataCloudflareMagicTransitSiteWansConfig;

DataCloudflareMagicTransitSiteWansConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .siteId(java.lang.String)
//  .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.siteId">siteId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_transit_site_wans#site_id DataCloudflareMagicTransitSiteWans#site_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_transit_site_wans#account_id DataCloudflareMagicTransitSiteWans#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/magic_transit_site_wans#max_items DataCloudflareMagicTransitSiteWans#max_items}

---

### DataCloudflareMagicTransitSiteWansResult <a name="DataCloudflareMagicTransitSiteWansResult" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_wans.DataCloudflareMagicTransitSiteWansResult;

DataCloudflareMagicTransitSiteWansResult.builder()
    .build();
```


### DataCloudflareMagicTransitSiteWansResultStaticAddressing <a name="DataCloudflareMagicTransitSiteWansResultStaticAddressing" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressing.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_wans.DataCloudflareMagicTransitSiteWansResultStaticAddressing;

DataCloudflareMagicTransitSiteWansResultStaticAddressing.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitSiteWansResultList <a name="DataCloudflareMagicTransitSiteWansResultList" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_wans.DataCloudflareMagicTransitSiteWansResultList;

new DataCloudflareMagicTransitSiteWansResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.get"></a>

```java
public DataCloudflareMagicTransitSiteWansResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareMagicTransitSiteWansResultOutputReference <a name="DataCloudflareMagicTransitSiteWansResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_wans.DataCloudflareMagicTransitSiteWansResultOutputReference;

new DataCloudflareMagicTransitSiteWansResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.healthCheckRate">healthCheckRate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.physport">physport</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.staticAddressing">staticAddressing</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference">DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.vlanTag">vlanTag</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResult">DataCloudflareMagicTransitSiteWansResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthCheckRate`<sup>Required</sup> <a name="healthCheckRate" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.healthCheckRate"></a>

```java
public java.lang.String getHealthCheckRate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `physport`<sup>Required</sup> <a name="physport" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.physport"></a>

```java
public java.lang.Number getPhysport();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

##### `staticAddressing`<sup>Required</sup> <a name="staticAddressing" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.staticAddressing"></a>

```java
public DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference getStaticAddressing();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference">DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference</a>

---

##### `vlanTag`<sup>Required</sup> <a name="vlanTag" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.vlanTag"></a>

```java
public java.lang.Number getVlanTag();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareMagicTransitSiteWansResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResult">DataCloudflareMagicTransitSiteWansResult</a>

---


### DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference <a name="DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_wans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference;

new DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.property.gatewayAddress">gatewayAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.property.secondaryAddress">secondaryAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressing">DataCloudflareMagicTransitSiteWansResultStaticAddressing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `gatewayAddress`<sup>Required</sup> <a name="gatewayAddress" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.property.gatewayAddress"></a>

```java
public java.lang.String getGatewayAddress();
```

- *Type:* java.lang.String

---

##### `secondaryAddress`<sup>Required</sup> <a name="secondaryAddress" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.property.secondaryAddress"></a>

```java
public java.lang.String getSecondaryAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressingOutputReference.property.internalValue"></a>

```java
public DataCloudflareMagicTransitSiteWansResultStaticAddressing getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteWans.DataCloudflareMagicTransitSiteWansResultStaticAddressing">DataCloudflareMagicTransitSiteWansResultStaticAddressing</a>

---




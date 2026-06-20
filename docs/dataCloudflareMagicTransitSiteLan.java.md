# `dataCloudflareMagicTransitSiteLan` Submodule <a name="`dataCloudflareMagicTransitSiteLan` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitSiteLan <a name="DataCloudflareMagicTransitSiteLan" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_site_lan cloudflare_magic_transit_site_lan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLan;

DataCloudflareMagicTransitSiteLan.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .lanId(java.lang.String)
    .siteId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.lanId">lanId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.siteId">siteId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_site_lan#account_id DataCloudflareMagicTransitSiteLan#account_id}

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.lanId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_site_lan#lan_id DataCloudflareMagicTransitSiteLan#lan_id}

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.Initializer.parameter.siteId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_site_lan#site_id DataCloudflareMagicTransitSiteLan#site_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareMagicTransitSiteLan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLan;

DataCloudflareMagicTransitSiteLan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLan;

DataCloudflareMagicTransitSiteLan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLan;

DataCloudflareMagicTransitSiteLan.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLan;

DataCloudflareMagicTransitSiteLan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareMagicTransitSiteLan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareMagicTransitSiteLan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareMagicTransitSiteLan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareMagicTransitSiteLan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_site_lan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitSiteLan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.bondId">bondId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.haLink">haLink</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.isBreakout">isBreakout</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.isPrioritized">isPrioritized</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.nat">nat</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference">DataCloudflareMagicTransitSiteLanNatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.physport">physport</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.routedSubnets">routedSubnets</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList">DataCloudflareMagicTransitSiteLanRoutedSubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.staticAddressing">staticAddressing</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference">DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.vlanTag">vlanTag</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.lanIdInput">lanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.siteIdInput">siteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.lanId">lanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `bondId`<sup>Required</sup> <a name="bondId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.bondId"></a>

```java
public java.lang.Number getBondId();
```

- *Type:* java.lang.Number

---

##### `haLink`<sup>Required</sup> <a name="haLink" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.haLink"></a>

```java
public IResolvable getHaLink();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isBreakout`<sup>Required</sup> <a name="isBreakout" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.isBreakout"></a>

```java
public IResolvable getIsBreakout();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isPrioritized`<sup>Required</sup> <a name="isPrioritized" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.isPrioritized"></a>

```java
public IResolvable getIsPrioritized();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nat`<sup>Required</sup> <a name="nat" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.nat"></a>

```java
public DataCloudflareMagicTransitSiteLanNatOutputReference getNat();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference">DataCloudflareMagicTransitSiteLanNatOutputReference</a>

---

##### `physport`<sup>Required</sup> <a name="physport" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.physport"></a>

```java
public java.lang.Number getPhysport();
```

- *Type:* java.lang.Number

---

##### `routedSubnets`<sup>Required</sup> <a name="routedSubnets" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.routedSubnets"></a>

```java
public DataCloudflareMagicTransitSiteLanRoutedSubnetsList getRoutedSubnets();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList">DataCloudflareMagicTransitSiteLanRoutedSubnetsList</a>

---

##### `staticAddressing`<sup>Required</sup> <a name="staticAddressing" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.staticAddressing"></a>

```java
public DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference getStaticAddressing();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference">DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference</a>

---

##### `vlanTag`<sup>Required</sup> <a name="vlanTag" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.vlanTag"></a>

```java
public java.lang.Number getVlanTag();
```

- *Type:* java.lang.Number

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `lanIdInput`<sup>Optional</sup> <a name="lanIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.lanIdInput"></a>

```java
public java.lang.String getLanIdInput();
```

- *Type:* java.lang.String

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.siteIdInput"></a>

```java
public java.lang.String getSiteIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.lanId"></a>

```java
public java.lang.String getLanId();
```

- *Type:* java.lang.String

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitSiteLanConfig <a name="DataCloudflareMagicTransitSiteLanConfig" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanConfig;

DataCloudflareMagicTransitSiteLanConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .lanId(java.lang.String)
    .siteId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.lanId">lanId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.siteId">siteId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_site_lan#account_id DataCloudflareMagicTransitSiteLan#account_id}

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.lanId"></a>

```java
public java.lang.String getLanId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_site_lan#lan_id DataCloudflareMagicTransitSiteLan#lan_id}

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanConfig.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_site_lan#site_id DataCloudflareMagicTransitSiteLan#site_id}

---

### DataCloudflareMagicTransitSiteLanNat <a name="DataCloudflareMagicTransitSiteLanNat" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNat.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanNat;

DataCloudflareMagicTransitSiteLanNat.builder()
    .build();
```


### DataCloudflareMagicTransitSiteLanRoutedSubnets <a name="DataCloudflareMagicTransitSiteLanRoutedSubnets" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnets.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanRoutedSubnets;

DataCloudflareMagicTransitSiteLanRoutedSubnets.builder()
    .build();
```


### DataCloudflareMagicTransitSiteLanRoutedSubnetsNat <a name="DataCloudflareMagicTransitSiteLanRoutedSubnetsNat" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNat.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNat;

DataCloudflareMagicTransitSiteLanRoutedSubnetsNat.builder()
    .build();
```


### DataCloudflareMagicTransitSiteLanStaticAddressing <a name="DataCloudflareMagicTransitSiteLanStaticAddressing" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressing.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanStaticAddressing;

DataCloudflareMagicTransitSiteLanStaticAddressing.builder()
    .build();
```


### DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay <a name="DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay;

DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay.builder()
    .build();
```


### DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer <a name="DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer;

DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer.builder()
    .build();
```


### DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions <a name="DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions;

DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitSiteLanNatOutputReference <a name="DataCloudflareMagicTransitSiteLanNatOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanNatOutputReference;

new DataCloudflareMagicTransitSiteLanNatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.staticPrefix">staticPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNat">DataCloudflareMagicTransitSiteLanNat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `staticPrefix`<sup>Required</sup> <a name="staticPrefix" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.staticPrefix"></a>

```java
public java.lang.String getStaticPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNatOutputReference.property.internalValue"></a>

```java
public DataCloudflareMagicTransitSiteLanNat getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanNat">DataCloudflareMagicTransitSiteLanNat</a>

---


### DataCloudflareMagicTransitSiteLanRoutedSubnetsList <a name="DataCloudflareMagicTransitSiteLanRoutedSubnetsList" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList;

new DataCloudflareMagicTransitSiteLanRoutedSubnetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.get"></a>

```java
public DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference <a name="DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference;

new DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefix">staticPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNat">DataCloudflareMagicTransitSiteLanRoutedSubnetsNat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `staticPrefix`<sup>Required</sup> <a name="staticPrefix" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefix"></a>

```java
public java.lang.String getStaticPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference.property.internalValue"></a>

```java
public DataCloudflareMagicTransitSiteLanRoutedSubnetsNat getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNat">DataCloudflareMagicTransitSiteLanRoutedSubnetsNat</a>

---


### DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference <a name="DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference;

new DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.nat">nat</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference">DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHop">nextHop</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnets">DataCloudflareMagicTransitSiteLanRoutedSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nat`<sup>Required</sup> <a name="nat" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.nat"></a>

```java
public DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference getNat();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference">DataCloudflareMagicTransitSiteLanRoutedSubnetsNatOutputReference</a>

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHop"></a>

```java
public java.lang.String getNextHop();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnetsOutputReference.property.internalValue"></a>

```java
public DataCloudflareMagicTransitSiteLanRoutedSubnets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanRoutedSubnets">DataCloudflareMagicTransitSiteLanRoutedSubnets</a>

---


### DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference <a name="DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference;

new DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddresses">serverAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serverAddresses`<sup>Required</sup> <a name="serverAddresses" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddresses"></a>

```java
public java.util.List<java.lang.String> getServerAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.internalValue"></a>

```java
public DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelay</a>

---


### DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList <a name="DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList;

new DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.get"></a>

```java
public DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference <a name="DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference;

new DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsOutputReference.property.internalValue"></a>

```java
public DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptions</a>

---


### DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference <a name="DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference;

new DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpOptions">dhcpOptions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEnd">dhcpPoolEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStart">dhcpPoolStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServer">dnsServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservations">reservations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dhcpOptions`<sup>Required</sup> <a name="dhcpOptions" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpOptions"></a>

```java
public DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList getDhcpOptions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerDhcpOptionsList</a>

---

##### `dhcpPoolEnd`<sup>Required</sup> <a name="dhcpPoolEnd" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEnd"></a>

```java
public java.lang.String getDhcpPoolEnd();
```

- *Type:* java.lang.String

---

##### `dhcpPoolStart`<sup>Required</sup> <a name="dhcpPoolStart" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStart"></a>

```java
public java.lang.String getDhcpPoolStart();
```

- *Type:* java.lang.String

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServer"></a>

```java
public java.lang.String getDnsServer();
```

- *Type:* java.lang.String

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reservations`<sup>Required</sup> <a name="reservations" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservations"></a>

```java
public StringMap getReservations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.internalValue"></a>

```java
public DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServer</a>

---


### DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference <a name="DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_magic_transit_site_lan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference;

new DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelay">dhcpRelay</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServer">dhcpServer</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddress">secondaryAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddress">virtualAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressing">DataCloudflareMagicTransitSiteLanStaticAddressing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `dhcpRelay`<sup>Required</sup> <a name="dhcpRelay" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelay"></a>

```java
public DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference getDhcpRelay();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpRelayOutputReference</a>

---

##### `dhcpServer`<sup>Required</sup> <a name="dhcpServer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServer"></a>

```java
public DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference getDhcpServer();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference">DataCloudflareMagicTransitSiteLanStaticAddressingDhcpServerOutputReference</a>

---

##### `secondaryAddress`<sup>Required</sup> <a name="secondaryAddress" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddress"></a>

```java
public java.lang.String getSecondaryAddress();
```

- *Type:* java.lang.String

---

##### `virtualAddress`<sup>Required</sup> <a name="virtualAddress" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddress"></a>

```java
public java.lang.String getVirtualAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressingOutputReference.property.internalValue"></a>

```java
public DataCloudflareMagicTransitSiteLanStaticAddressing getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteLan.DataCloudflareMagicTransitSiteLanStaticAddressing">DataCloudflareMagicTransitSiteLanStaticAddressing</a>

---




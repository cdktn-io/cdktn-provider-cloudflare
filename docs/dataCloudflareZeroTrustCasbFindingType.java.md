# `dataCloudflareZeroTrustCasbFindingType` Submodule <a name="`dataCloudflareZeroTrustCasbFindingType` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCasbFindingType <a name="DataCloudflareZeroTrustCasbFindingType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type cloudflare_zero_trust_casb_finding_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_finding_type.DataCloudflareZeroTrustCasbFindingType;

DataCloudflareZeroTrustCasbFindingType.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .filter(DataCloudflareZeroTrustCasbFindingTypeFilter)
//  .findingTypeId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#account_id DataCloudflareZeroTrustCasbFindingType#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#filter DataCloudflareZeroTrustCasbFindingType#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.findingTypeId">findingTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#finding_type_id DataCloudflareZeroTrustCasbFindingType#finding_type_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#account_id DataCloudflareZeroTrustCasbFindingType#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#filter DataCloudflareZeroTrustCasbFindingType#filter}.

---

##### `findingTypeId`<sup>Optional</sup> <a name="findingTypeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.findingTypeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#finding_type_id DataCloudflareZeroTrustCasbFindingType#finding_type_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFindingTypeId">resetFindingTypeId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter"></a>

```java
public void putFilter(DataCloudflareZeroTrustCasbFindingTypeFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetFindingTypeId` <a name="resetFindingTypeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFindingTypeId"></a>

```java
public void resetFindingTypeId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_finding_type.DataCloudflareZeroTrustCasbFindingType;

DataCloudflareZeroTrustCasbFindingType.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_finding_type.DataCloudflareZeroTrustCasbFindingType;

DataCloudflareZeroTrustCasbFindingType.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_finding_type.DataCloudflareZeroTrustCasbFindingType;

DataCloudflareZeroTrustCasbFindingType.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_finding_type.DataCloudflareZeroTrustCasbFindingType;

DataCloudflareZeroTrustCasbFindingType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustCasbFindingType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustCasbFindingType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustCasbFindingType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCasbFindingType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.appliesToAllIntegrations">appliesToAllIntegrations</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetClass">assetClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetVendor">assetVendor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.category">category</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference">DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference">DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.integrationIds">integrationIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.matchCount">matchCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.origin">origin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.quarantined">quarantined</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.vendor">vendor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeIdInput">findingTypeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeId">findingTypeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `appliesToAllIntegrations`<sup>Required</sup> <a name="appliesToAllIntegrations" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.appliesToAllIntegrations"></a>

```java
public IResolvable getAppliesToAllIntegrations();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `assetClass`<sup>Required</sup> <a name="assetClass" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetClass"></a>

```java
public java.lang.String getAssetClass();
```

- *Type:* java.lang.String

---

##### `assetVendor`<sup>Required</sup> <a name="assetVendor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetVendor"></a>

```java
public java.lang.String getAssetVendor();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.category"></a>

```java
public DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference getCategory();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference">DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filter"></a>

```java
public DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference">DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationIds`<sup>Required</sup> <a name="integrationIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.integrationIds"></a>

```java
public java.util.List<java.lang.String> getIntegrationIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchCount`<sup>Required</sup> <a name="matchCount" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.matchCount"></a>

```java
public java.lang.Number getMatchCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

---

##### `quarantined`<sup>Required</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.quarantined"></a>

```java
public IResolvable getQuarantined();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.vendor"></a>

```java
public java.lang.String getVendor();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filterInput"></a>

```java
public IResolvable|DataCloudflareZeroTrustCasbFindingTypeFilter getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

---

##### `findingTypeIdInput`<sup>Optional</sup> <a name="findingTypeIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeIdInput"></a>

```java
public java.lang.String getFindingTypeIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `findingTypeId`<sup>Required</sup> <a name="findingTypeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeId"></a>

```java
public java.lang.String getFindingTypeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCasbFindingTypeCategory <a name="DataCloudflareZeroTrustCasbFindingTypeCategory" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_finding_type.DataCloudflareZeroTrustCasbFindingTypeCategory;

DataCloudflareZeroTrustCasbFindingTypeCategory.builder()
    .build();
```


### DataCloudflareZeroTrustCasbFindingTypeConfig <a name="DataCloudflareZeroTrustCasbFindingTypeConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_finding_type.DataCloudflareZeroTrustCasbFindingTypeConfig;

DataCloudflareZeroTrustCasbFindingTypeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .filter(DataCloudflareZeroTrustCasbFindingTypeFilter)
//  .findingTypeId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#account_id DataCloudflareZeroTrustCasbFindingType#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#filter DataCloudflareZeroTrustCasbFindingType#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.findingTypeId">findingTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#finding_type_id DataCloudflareZeroTrustCasbFindingType#finding_type_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#account_id DataCloudflareZeroTrustCasbFindingType#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.filter"></a>

```java
public DataCloudflareZeroTrustCasbFindingTypeFilter getFilter();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#filter DataCloudflareZeroTrustCasbFindingType#filter}.

---

##### `findingTypeId`<sup>Optional</sup> <a name="findingTypeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.findingTypeId"></a>

```java
public java.lang.String getFindingTypeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#finding_type_id DataCloudflareZeroTrustCasbFindingType#finding_type_id}.

---

### DataCloudflareZeroTrustCasbFindingTypeFilter <a name="DataCloudflareZeroTrustCasbFindingTypeFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_finding_type.DataCloudflareZeroTrustCasbFindingTypeFilter;

DataCloudflareZeroTrustCasbFindingTypeFilter.builder()
//  .direction(java.lang.String)
//  .maxUpdatedAt(java.lang.String)
//  .minUpdatedAt(java.lang.String)
//  .order(java.lang.String)
//  .origins(java.util.List<java.lang.String>)
//  .quarantined(java.lang.Boolean|IResolvable)
//  .search(java.lang.String)
//  .severities(java.util.List<java.lang.String>)
//  .types(java.util.List<java.lang.String>)
//  .vendors(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.direction">direction</a></code> | <code>java.lang.String</code> | Sort direction for the primary field. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.maxUpdatedAt">maxUpdatedAt</a></code> | <code>java.lang.String</code> | Return only finding types updated at or before this RFC 3339 timestamp (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.minUpdatedAt">minUpdatedAt</a></code> | <code>java.lang.String</code> | Return only finding types updated at or after this RFC 3339 timestamp (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.order">order</a></code> | <code>java.lang.String</code> | Field to sort by (case-insensitive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.origins">origins</a></code> | <code>java.util.List<java.lang.String></code> | Filter finding types by origin. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.quarantined">quarantined</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.search">search</a></code> | <code>java.lang.String</code> | Filter finding types by name or ID (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.severities">severities</a></code> | <code>java.util.List<java.lang.String></code> | Filter finding types by severity. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.types">types</a></code> | <code>java.util.List<java.lang.String></code> | Filter finding types by category type. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.vendors">vendors</a></code> | <code>java.util.List<java.lang.String></code> | Filter finding types by vendor. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Sort direction for the primary field.

Defaults to 'desc'.
Ties are resolved by case-insensitive name, then ID, both ascending regardless of direction.
Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#direction DataCloudflareZeroTrustCasbFindingType#direction}

---

##### `maxUpdatedAt`<sup>Optional</sup> <a name="maxUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.maxUpdatedAt"></a>

```java
public java.lang.String getMaxUpdatedAt();
```

- *Type:* java.lang.String

Return only finding types updated at or before this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#max_updated_at DataCloudflareZeroTrustCasbFindingType#max_updated_at}

---

##### `minUpdatedAt`<sup>Optional</sup> <a name="minUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.minUpdatedAt"></a>

```java
public java.lang.String getMinUpdatedAt();
```

- *Type:* java.lang.String

Return only finding types updated at or after this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#min_updated_at DataCloudflareZeroTrustCasbFindingType#min_updated_at}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to sort by (case-insensitive).

Defaults to 'created'.
Name and vendor sorting is case-insensitive; vendor uses friendly provider names.
Ascending order: type Content then Posture; origin custom then system;
severity Low, Medium, High, Critical.
Available values: "created", "updated", "match_count", "name", "vendor", "type", "origin", "severity".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#order DataCloudflareZeroTrustCasbFindingType#order}

---

##### `origins`<sup>Optional</sup> <a name="origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.origins"></a>

```java
public java.util.List<java.lang.String> getOrigins();
```

- *Type:* java.util.List<java.lang.String>

Filter finding types by origin. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#origins DataCloudflareZeroTrustCasbFindingType#origins}

---

##### `quarantined`<sup>Optional</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.quarantined"></a>

```java
public java.lang.Boolean|IResolvable getQuarantined();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#quarantined DataCloudflareZeroTrustCasbFindingType#quarantined}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Filter finding types by name or ID (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#search DataCloudflareZeroTrustCasbFindingType#search}

---

##### `severities`<sup>Optional</sup> <a name="severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.severities"></a>

```java
public java.util.List<java.lang.String> getSeverities();
```

- *Type:* java.util.List<java.lang.String>

Filter finding types by severity. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#severities DataCloudflareZeroTrustCasbFindingType#severities}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.types"></a>

```java
public java.util.List<java.lang.String> getTypes();
```

- *Type:* java.util.List<java.lang.String>

Filter finding types by category type. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#types DataCloudflareZeroTrustCasbFindingType#types}

---

##### `vendors`<sup>Optional</sup> <a name="vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.vendors"></a>

```java
public java.util.List<java.lang.String> getVendors();
```

- *Type:* java.util.List<java.lang.String>

Filter finding types by vendor.

Supports multiple comma-separated values. Each value may be either the vendor enum (GOOGLE_WORKSPACE) or the friendly name returned by the read routes (Google Workspace).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#vendors DataCloudflareZeroTrustCasbFindingType#vendors}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference <a name="DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_finding_type.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference;

new DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.observation">observation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.product">product</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory">DataCloudflareZeroTrustCasbFindingTypeCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `observation`<sup>Required</sup> <a name="observation" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.observation"></a>

```java
public java.lang.String getObservation();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustCasbFindingTypeCategory getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory">DataCloudflareZeroTrustCasbFindingTypeCategory</a>

---


### DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference <a name="DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_finding_type.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference;

new DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMaxUpdatedAt">resetMaxUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMinUpdatedAt">resetMinUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrigins">resetOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetQuarantined">resetQuarantined</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSeverities">resetSeverities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetTypes">resetTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetVendors">resetVendors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetMaxUpdatedAt` <a name="resetMaxUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMaxUpdatedAt"></a>

```java
public void resetMaxUpdatedAt()
```

##### `resetMinUpdatedAt` <a name="resetMinUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMinUpdatedAt"></a>

```java
public void resetMinUpdatedAt()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetOrigins` <a name="resetOrigins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrigins"></a>

```java
public void resetOrigins()
```

##### `resetQuarantined` <a name="resetQuarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetQuarantined"></a>

```java
public void resetQuarantined()
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetSeverities` <a name="resetSeverities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSeverities"></a>

```java
public void resetSeverities()
```

##### `resetTypes` <a name="resetTypes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetTypes"></a>

```java
public void resetTypes()
```

##### `resetVendors` <a name="resetVendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetVendors"></a>

```java
public void resetVendors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAtInput">maxUpdatedAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAtInput">minUpdatedAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.originsInput">originsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantinedInput">quarantinedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severitiesInput">severitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.typesInput">typesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendorsInput">vendorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAt">maxUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAt">minUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.origins">origins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantined">quarantined</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severities">severities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.types">types</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendors">vendors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `maxUpdatedAtInput`<sup>Optional</sup> <a name="maxUpdatedAtInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAtInput"></a>

```java
public java.lang.String getMaxUpdatedAtInput();
```

- *Type:* java.lang.String

---

##### `minUpdatedAtInput`<sup>Optional</sup> <a name="minUpdatedAtInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAtInput"></a>

```java
public java.lang.String getMinUpdatedAtInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `originsInput`<sup>Optional</sup> <a name="originsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.originsInput"></a>

```java
public java.util.List<java.lang.String> getOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `quarantinedInput`<sup>Optional</sup> <a name="quarantinedInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantinedInput"></a>

```java
public java.lang.Boolean|IResolvable getQuarantinedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `severitiesInput`<sup>Optional</sup> <a name="severitiesInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severitiesInput"></a>

```java
public java.util.List<java.lang.String> getSeveritiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.typesInput"></a>

```java
public java.util.List<java.lang.String> getTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vendorsInput`<sup>Optional</sup> <a name="vendorsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendorsInput"></a>

```java
public java.util.List<java.lang.String> getVendorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `maxUpdatedAt`<sup>Required</sup> <a name="maxUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAt"></a>

```java
public java.lang.String getMaxUpdatedAt();
```

- *Type:* java.lang.String

---

##### `minUpdatedAt`<sup>Required</sup> <a name="minUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAt"></a>

```java
public java.lang.String getMinUpdatedAt();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.origins"></a>

```java
public java.util.List<java.lang.String> getOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `quarantined`<sup>Required</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantined"></a>

```java
public java.lang.Boolean|IResolvable getQuarantined();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severities"></a>

```java
public java.util.List<java.lang.String> getSeverities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.types"></a>

```java
public java.util.List<java.lang.String> getTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vendors`<sup>Required</sup> <a name="vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendors"></a>

```java
public java.util.List<java.lang.String> getVendors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareZeroTrustCasbFindingTypeFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

---




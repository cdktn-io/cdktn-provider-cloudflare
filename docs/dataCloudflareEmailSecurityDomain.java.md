# `dataCloudflareEmailSecurityDomain` Submodule <a name="`dataCloudflareEmailSecurityDomain` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityDomain <a name="DataCloudflareEmailSecurityDomain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain cloudflare_email_security_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domain.DataCloudflareEmailSecurityDomain;

DataCloudflareEmailSecurityDomain.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .domainId(java.lang.String)
//  .filter(DataCloudflareEmailSecurityDomainFilter)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | Domain identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#filter DataCloudflareEmailSecurityDomain#filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#account_id DataCloudflareEmailSecurityDomain#account_id}

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

Domain identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#domain_id DataCloudflareEmailSecurityDomain#domain_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#filter DataCloudflareEmailSecurityDomain#filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter"></a>

```java
public void putFilter(DataCloudflareEmailSecurityDomainFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

---

##### `resetDomainId` <a name="resetDomainId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetDomainId"></a>

```java
public void resetDomainId()
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.resetFilter"></a>

```java
public void resetFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareEmailSecurityDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domain.DataCloudflareEmailSecurityDomain;

DataCloudflareEmailSecurityDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domain.DataCloudflareEmailSecurityDomain;

DataCloudflareEmailSecurityDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domain.DataCloudflareEmailSecurityDomain;

DataCloudflareEmailSecurityDomain.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domain.DataCloudflareEmailSecurityDomain;

DataCloudflareEmailSecurityDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareEmailSecurityDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareEmailSecurityDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareEmailSecurityDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareEmailSecurityDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.allowedDeliveryModes">allowedDeliveryModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference">DataCloudflareEmailSecurityDomainAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dmarcStatus">dmarcStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dropDispositions">dropDispositions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.emailsProcessed">emailsProcessed</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference">DataCloudflareEmailSecurityDomainFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.inboxProvider">inboxProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.ipRestrictions">ipRestrictions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lookbackHops">lookbackHops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.o365TenantId">o365TenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsInbound">requireTlsInbound</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsOutbound">requireTlsOutbound</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.spfStatus">spfStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.transport">transport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `allowedDeliveryModes`<sup>Required</sup> <a name="allowedDeliveryModes" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.allowedDeliveryModes"></a>

```java
public java.util.List<java.lang.String> getAllowedDeliveryModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.authorization"></a>

```java
public DataCloudflareEmailSecurityDomainAuthorizationOutputReference getAuthorization();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference">DataCloudflareEmailSecurityDomainAuthorizationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dmarcStatus`<sup>Required</sup> <a name="dmarcStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dmarcStatus"></a>

```java
public java.lang.String getDmarcStatus();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `dropDispositions`<sup>Required</sup> <a name="dropDispositions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.dropDispositions"></a>

```java
public java.util.List<java.lang.String> getDropDispositions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailsProcessed`<sup>Required</sup> <a name="emailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.emailsProcessed"></a>

```java
public DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference getEmailsProcessed();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference">DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filter"></a>

```java
public DataCloudflareEmailSecurityDomainFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference">DataCloudflareEmailSecurityDomainFilterOutputReference</a>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inboxProvider`<sup>Required</sup> <a name="inboxProvider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.inboxProvider"></a>

```java
public java.lang.String getInboxProvider();
```

- *Type:* java.lang.String

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

---

##### `ipRestrictions`<sup>Required</sup> <a name="ipRestrictions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.ipRestrictions"></a>

```java
public java.util.List<java.lang.String> getIpRestrictions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `lookbackHops`<sup>Required</sup> <a name="lookbackHops" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.lookbackHops"></a>

```java
public java.lang.Number getLookbackHops();
```

- *Type:* java.lang.Number

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `o365TenantId`<sup>Required</sup> <a name="o365TenantId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.o365TenantId"></a>

```java
public java.lang.String getO365TenantId();
```

- *Type:* java.lang.String

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireTlsInbound`<sup>Required</sup> <a name="requireTlsInbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsInbound"></a>

```java
public IResolvable getRequireTlsInbound();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `requireTlsOutbound`<sup>Required</sup> <a name="requireTlsOutbound" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.requireTlsOutbound"></a>

```java
public IResolvable getRequireTlsOutbound();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `spfStatus`<sup>Required</sup> <a name="spfStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.spfStatus"></a>

```java
public java.lang.String getSpfStatus();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.transport"></a>

```java
public java.lang.String getTransport();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.filterInput"></a>

```java
public IResolvable|DataCloudflareEmailSecurityDomainFilter getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityDomainAuthorization <a name="DataCloudflareEmailSecurityDomainAuthorization" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domain.DataCloudflareEmailSecurityDomainAuthorization;

DataCloudflareEmailSecurityDomainAuthorization.builder()
    .build();
```


### DataCloudflareEmailSecurityDomainConfig <a name="DataCloudflareEmailSecurityDomainConfig" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domain.DataCloudflareEmailSecurityDomainConfig;

DataCloudflareEmailSecurityDomainConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .domainId(java.lang.String)
//  .filter(DataCloudflareEmailSecurityDomainFilter)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.domainId">domainId</a></code> | <code>java.lang.String</code> | Domain identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#filter DataCloudflareEmailSecurityDomain#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#account_id DataCloudflareEmailSecurityDomain#account_id}

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

Domain identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#domain_id DataCloudflareEmailSecurityDomain#domain_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainConfig.property.filter"></a>

```java
public DataCloudflareEmailSecurityDomainFilter getFilter();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#filter DataCloudflareEmailSecurityDomain#filter}.

---

### DataCloudflareEmailSecurityDomainEmailsProcessed <a name="DataCloudflareEmailSecurityDomainEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domain.DataCloudflareEmailSecurityDomainEmailsProcessed;

DataCloudflareEmailSecurityDomainEmailsProcessed.builder()
    .build();
```


### DataCloudflareEmailSecurityDomainFilter <a name="DataCloudflareEmailSecurityDomainFilter" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domain.DataCloudflareEmailSecurityDomainFilter;

DataCloudflareEmailSecurityDomainFilter.builder()
//  .activeDeliveryMode(java.lang.String)
//  .allowedDeliveryMode(java.lang.String)
//  .direction(java.lang.String)
//  .domain(java.util.List<java.lang.String>)
//  .integrationId(java.lang.String)
//  .order(java.lang.String)
//  .search(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.activeDeliveryMode">activeDeliveryMode</a></code> | <code>java.lang.String</code> | Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.allowedDeliveryMode">allowedDeliveryMode</a></code> | <code>java.lang.String</code> | Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.direction">direction</a></code> | <code>java.lang.String</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.domain">domain</a></code> | <code>java.util.List<java.lang.String></code> | Domain names to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Integration ID to filter by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.order">order</a></code> | <code>java.lang.String</code> | Field to sort by. Available values: "domain", "created_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.search">search</a></code> | <code>java.lang.String</code> | Search term for filtering records. Behavior may change. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.status">status</a></code> | <code>java.lang.String</code> | Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT". |

---

##### `activeDeliveryMode`<sup>Optional</sup> <a name="activeDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.activeDeliveryMode"></a>

```java
public java.lang.String getActiveDeliveryMode();
```

- *Type:* java.lang.String

Currently active delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#active_delivery_mode DataCloudflareEmailSecurityDomain#active_delivery_mode}

---

##### `allowedDeliveryMode`<sup>Optional</sup> <a name="allowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.allowedDeliveryMode"></a>

```java
public java.lang.String getAllowedDeliveryMode();
```

- *Type:* java.lang.String

Delivery mode to filter by. Available values: "DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#allowed_delivery_mode DataCloudflareEmailSecurityDomain#allowed_delivery_mode}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#direction DataCloudflareEmailSecurityDomain#direction}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.domain"></a>

```java
public java.util.List<java.lang.String> getDomain();
```

- *Type:* java.util.List<java.lang.String>

Domain names to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#domain DataCloudflareEmailSecurityDomain#domain}

---

##### `integrationId`<sup>Optional</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

Integration ID to filter by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#integration_id DataCloudflareEmailSecurityDomain#integration_id}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to sort by. Available values: "domain", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#order DataCloudflareEmailSecurityDomain#order}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Search term for filtering records. Behavior may change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#search DataCloudflareEmailSecurityDomain#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Filters response to domains with the provided status. Available values: "PENDING", "ACTIVE", "FAILED", "TIMEOUT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/data-sources/email_security_domain#status DataCloudflareEmailSecurityDomain#status}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityDomainAuthorizationOutputReference <a name="DataCloudflareEmailSecurityDomainAuthorizationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference;

new DataCloudflareEmailSecurityDomainAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.authorized">authorized</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization">DataCloudflareEmailSecurityDomainAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorized`<sup>Required</sup> <a name="authorized" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.authorized"></a>

```java
public IResolvable getAuthorized();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorizationOutputReference.property.internalValue"></a>

```java
public DataCloudflareEmailSecurityDomainAuthorization getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainAuthorization">DataCloudflareEmailSecurityDomainAuthorization</a>

---


### DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference <a name="DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference;

new DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed">totalEmailsProcessed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious">totalEmailsProcessedPrevious</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed">DataCloudflareEmailSecurityDomainEmailsProcessed</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `totalEmailsProcessed`<sup>Required</sup> <a name="totalEmailsProcessed" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed"></a>

```java
public java.lang.Number getTotalEmailsProcessed();
```

- *Type:* java.lang.Number

---

##### `totalEmailsProcessedPrevious`<sup>Required</sup> <a name="totalEmailsProcessedPrevious" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious"></a>

```java
public java.lang.Number getTotalEmailsProcessedPrevious();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessedOutputReference.property.internalValue"></a>

```java
public DataCloudflareEmailSecurityDomainEmailsProcessed getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainEmailsProcessed">DataCloudflareEmailSecurityDomainEmailsProcessed</a>

---


### DataCloudflareEmailSecurityDomainFilterOutputReference <a name="DataCloudflareEmailSecurityDomainFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_email_security_domain.DataCloudflareEmailSecurityDomainFilterOutputReference;

new DataCloudflareEmailSecurityDomainFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetActiveDeliveryMode">resetActiveDeliveryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetAllowedDeliveryMode">resetAllowedDeliveryMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetIntegrationId">resetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveDeliveryMode` <a name="resetActiveDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetActiveDeliveryMode"></a>

```java
public void resetActiveDeliveryMode()
```

##### `resetAllowedDeliveryMode` <a name="resetAllowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetAllowedDeliveryMode"></a>

```java
public void resetAllowedDeliveryMode()
```

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetIntegrationId` <a name="resetIntegrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetIntegrationId"></a>

```java
public void resetIntegrationId()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryModeInput">activeDeliveryModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryModeInput">allowedDeliveryModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domainInput">domainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationIdInput">integrationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryMode">activeDeliveryMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryMode">allowedDeliveryMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domain">domain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeDeliveryModeInput`<sup>Optional</sup> <a name="activeDeliveryModeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryModeInput"></a>

```java
public java.lang.String getActiveDeliveryModeInput();
```

- *Type:* java.lang.String

---

##### `allowedDeliveryModeInput`<sup>Optional</sup> <a name="allowedDeliveryModeInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryModeInput"></a>

```java
public java.lang.String getAllowedDeliveryModeInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domainInput"></a>

```java
public java.util.List<java.lang.String> getDomainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationIdInput"></a>

```java
public java.lang.String getIntegrationIdInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `activeDeliveryMode`<sup>Required</sup> <a name="activeDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.activeDeliveryMode"></a>

```java
public java.lang.String getActiveDeliveryMode();
```

- *Type:* java.lang.String

---

##### `allowedDeliveryMode`<sup>Required</sup> <a name="allowedDeliveryMode" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.allowedDeliveryMode"></a>

```java
public java.lang.String getAllowedDeliveryMode();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.domain"></a>

```java
public java.util.List<java.lang.String> getDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataCloudflareEmailSecurityDomainFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.dataCloudflareEmailSecurityDomain.DataCloudflareEmailSecurityDomainFilter">DataCloudflareEmailSecurityDomainFilter</a>

---




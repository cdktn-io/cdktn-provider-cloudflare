# `dataCloudflareR2BucketLifecycle` Submodule <a name="`dataCloudflareR2BucketLifecycle` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareR2BucketLifecycle <a name="DataCloudflareR2BucketLifecycle" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycle;

DataCloudflareR2BucketLifecycle.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .bucketName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Account ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Name of the bucket. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/r2_bucket_lifecycle#account_id DataCloudflareR2BucketLifecycle#account_id}

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

Name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/r2_bucket_lifecycle#bucket_name DataCloudflareR2BucketLifecycle#bucket_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareR2BucketLifecycle resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycle;

DataCloudflareR2BucketLifecycle.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycle;

DataCloudflareR2BucketLifecycle.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycle;

DataCloudflareR2BucketLifecycle.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycle;

DataCloudflareR2BucketLifecycle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareR2BucketLifecycle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareR2BucketLifecycle resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareR2BucketLifecycle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareR2BucketLifecycle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/r2_bucket_lifecycle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareR2BucketLifecycle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList">DataCloudflareR2BucketLifecycleRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.rules"></a>

```java
public DataCloudflareR2BucketLifecycleRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList">DataCloudflareR2BucketLifecycleRulesList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycle.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareR2BucketLifecycleConfig <a name="DataCloudflareR2BucketLifecycleConfig" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleConfig;

DataCloudflareR2BucketLifecycleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .bucketName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Account ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Name of the bucket. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/r2_bucket_lifecycle#account_id DataCloudflareR2BucketLifecycle#account_id}

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/r2_bucket_lifecycle#bucket_name DataCloudflareR2BucketLifecycle#bucket_name}

---

### DataCloudflareR2BucketLifecycleRules <a name="DataCloudflareR2BucketLifecycleRules" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRules.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRules;

DataCloudflareR2BucketLifecycleRules.builder()
    .build();
```


### DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition <a name="DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition;

DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition.builder()
    .build();
```


### DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition <a name="DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition;

DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition.builder()
    .build();
```


### DataCloudflareR2BucketLifecycleRulesConditions <a name="DataCloudflareR2BucketLifecycleRulesConditions" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditions.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesConditions;

DataCloudflareR2BucketLifecycleRulesConditions.builder()
    .build();
```


### DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition <a name="DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition;

DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition.builder()
    .build();
```


### DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition <a name="DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition;

DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition.builder()
    .build();
```


### DataCloudflareR2BucketLifecycleRulesStorageClassTransitions <a name="DataCloudflareR2BucketLifecycleRulesStorageClassTransitions" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitions.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitions;

DataCloudflareR2BucketLifecycleRulesStorageClassTransitions.builder()
    .build();
```


### DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition <a name="DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition;

DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference <a name="DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference;

new DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.internalValue"></a>

```java
public DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition</a>

---


### DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference <a name="DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference;

new DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.condition"></a>

```java
public DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.internalValue"></a>

```java
public DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransition</a>

---


### DataCloudflareR2BucketLifecycleRulesConditionsOutputReference <a name="DataCloudflareR2BucketLifecycleRulesConditionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference;

new DataCloudflareR2BucketLifecycleRulesConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditions">DataCloudflareR2BucketLifecycleRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference.property.internalValue"></a>

```java
public DataCloudflareR2BucketLifecycleRulesConditions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditions">DataCloudflareR2BucketLifecycleRulesConditions</a>

---


### DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference <a name="DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference;

new DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.date">date</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.date"></a>

```java
public java.lang.String getDate();
```

- *Type:* java.lang.String

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.internalValue"></a>

```java
public DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionCondition</a>

---


### DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference <a name="DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference;

new DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.condition"></a>

```java
public DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.internalValue"></a>

```java
public DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransition</a>

---


### DataCloudflareR2BucketLifecycleRulesList <a name="DataCloudflareR2BucketLifecycleRulesList" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesList;

new DataCloudflareR2BucketLifecycleRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.get"></a>

```java
public DataCloudflareR2BucketLifecycleRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareR2BucketLifecycleRulesOutputReference <a name="DataCloudflareR2BucketLifecycleRulesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference;

new DataCloudflareR2BucketLifecycleRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.abortMultipartUploadsTransition">abortMultipartUploadsTransition</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference">DataCloudflareR2BucketLifecycleRulesConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.deleteObjectsTransition">deleteObjectsTransition</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.storageClassTransitions">storageClassTransitions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList">DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRules">DataCloudflareR2BucketLifecycleRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `abortMultipartUploadsTransition`<sup>Required</sup> <a name="abortMultipartUploadsTransition" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.abortMultipartUploadsTransition"></a>

```java
public DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference getAbortMultipartUploadsTransition();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference">DataCloudflareR2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.conditions"></a>

```java
public DataCloudflareR2BucketLifecycleRulesConditionsOutputReference getConditions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesConditionsOutputReference">DataCloudflareR2BucketLifecycleRulesConditionsOutputReference</a>

---

##### `deleteObjectsTransition`<sup>Required</sup> <a name="deleteObjectsTransition" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.deleteObjectsTransition"></a>

```java
public DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference getDeleteObjectsTransition();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference">DataCloudflareR2BucketLifecycleRulesDeleteObjectsTransitionOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `storageClassTransitions`<sup>Required</sup> <a name="storageClassTransitions" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.storageClassTransitions"></a>

```java
public DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList getStorageClassTransitions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList">DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesOutputReference.property.internalValue"></a>

```java
public DataCloudflareR2BucketLifecycleRules getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRules">DataCloudflareR2BucketLifecycleRules</a>

---


### DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference <a name="DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference;

new DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.date">date</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition">DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.date"></a>

```java
public java.lang.String getDate();
```

- *Type:* java.lang.String

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.internalValue"></a>

```java
public DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition">DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsCondition</a>

---


### DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList <a name="DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList;

new DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.get"></a>

```java
public DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference <a name="DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_r2_bucket_lifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference;

new DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference">DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitions">DataCloudflareR2BucketLifecycleRulesStorageClassTransitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.condition"></a>

```java
public DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference">DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference</a>

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.internalValue"></a>

```java
public DataCloudflareR2BucketLifecycleRulesStorageClassTransitions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareR2BucketLifecycle.DataCloudflareR2BucketLifecycleRulesStorageClassTransitions">DataCloudflareR2BucketLifecycleRulesStorageClassTransitions</a>

---




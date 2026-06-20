# `dataCloudflareWorkerVersions` Submodule <a name="`dataCloudflareWorkerVersions` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkerVersions <a name="DataCloudflareWorkerVersions" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/worker_versions cloudflare_worker_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersions;

DataCloudflareWorkerVersions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .workerId(java.lang.String)
//  .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.workerId">workerId</a></code> | <code>java.lang.String</code> | Identifier for the Worker, which can be ID or name. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.workerId"></a>

- *Type:* java.lang.String

Identifier for the Worker, which can be ID or name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/worker_versions#worker_id DataCloudflareWorkerVersions#worker_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/worker_versions#account_id DataCloudflareWorkerVersions#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/worker_versions#max_items DataCloudflareWorkerVersions#max_items}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetMaxItems"></a>

```java
public void resetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareWorkerVersions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersions;

DataCloudflareWorkerVersions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersions;

DataCloudflareWorkerVersions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersions;

DataCloudflareWorkerVersions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersions;

DataCloudflareWorkerVersions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareWorkerVersions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareWorkerVersions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareWorkerVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareWorkerVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/worker_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkerVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList">DataCloudflareWorkerVersionsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerIdInput">workerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerId">workerId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.result"></a>

```java
public DataCloudflareWorkerVersionsResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList">DataCloudflareWorkerVersionsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `workerIdInput`<sup>Optional</sup> <a name="workerIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerIdInput"></a>

```java
public java.lang.String getWorkerIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerId"></a>

```java
public java.lang.String getWorkerId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkerVersionsConfig <a name="DataCloudflareWorkerVersionsConfig" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsConfig;

DataCloudflareWorkerVersionsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .workerId(java.lang.String)
//  .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.workerId">workerId</a></code> | <code>java.lang.String</code> | Identifier for the Worker, which can be ID or name. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.workerId"></a>

```java
public java.lang.String getWorkerId();
```

- *Type:* java.lang.String

Identifier for the Worker, which can be ID or name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/worker_versions#worker_id DataCloudflareWorkerVersions#worker_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/worker_versions#account_id DataCloudflareWorkerVersions#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/worker_versions#max_items DataCloudflareWorkerVersions#max_items}

---

### DataCloudflareWorkerVersionsResult <a name="DataCloudflareWorkerVersionsResult" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResult;

DataCloudflareWorkerVersionsResult.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultAnnotations <a name="DataCloudflareWorkerVersionsResultAnnotations" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultAnnotations;

DataCloudflareWorkerVersionsResultAnnotations.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultAssets <a name="DataCloudflareWorkerVersionsResultAssets" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultAssets;

DataCloudflareWorkerVersionsResultAssets.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultAssetsConfig <a name="DataCloudflareWorkerVersionsResultAssetsConfig" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultAssetsConfig;

DataCloudflareWorkerVersionsResultAssetsConfig.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultBindings <a name="DataCloudflareWorkerVersionsResultBindings" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultBindings;

DataCloudflareWorkerVersionsResultBindings.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultBindingsOutbound <a name="DataCloudflareWorkerVersionsResultBindingsOutbound" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultBindingsOutbound;

DataCloudflareWorkerVersionsResultBindingsOutbound.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultBindingsOutboundParams <a name="DataCloudflareWorkerVersionsResultBindingsOutboundParams" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParams.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultBindingsOutboundParams;

DataCloudflareWorkerVersionsResultBindingsOutboundParams.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultBindingsOutboundWorker <a name="DataCloudflareWorkerVersionsResultBindingsOutboundWorker" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker;

DataCloudflareWorkerVersionsResultBindingsOutboundWorker.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultBindingsSimple <a name="DataCloudflareWorkerVersionsResultBindingsSimple" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimple"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimple.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultBindingsSimple;

DataCloudflareWorkerVersionsResultBindingsSimple.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultContainers <a name="DataCloudflareWorkerVersionsResultContainers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainers.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultContainers;

DataCloudflareWorkerVersionsResultContainers.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultLimits <a name="DataCloudflareWorkerVersionsResultLimits" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultLimits;

DataCloudflareWorkerVersionsResultLimits.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultMigrations <a name="DataCloudflareWorkerVersionsResultMigrations" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrations;

DataCloudflareWorkerVersionsResultMigrations.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultMigrationsRenamedClasses <a name="DataCloudflareWorkerVersionsResultMigrationsRenamedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses;

DataCloudflareWorkerVersionsResultMigrationsRenamedClasses.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultMigrationsSteps <a name="DataCloudflareWorkerVersionsResultMigrationsSteps" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsSteps;

DataCloudflareWorkerVersionsResultMigrationsSteps.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses <a name="DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses;

DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses <a name="DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses;

DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultMigrationsTransferredClasses <a name="DataCloudflareWorkerVersionsResultMigrationsTransferredClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses;

DataCloudflareWorkerVersionsResultMigrationsTransferredClasses.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultModules <a name="DataCloudflareWorkerVersionsResultModules" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultModules;

DataCloudflareWorkerVersionsResultModules.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultPlacement <a name="DataCloudflareWorkerVersionsResultPlacement" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultPlacement;

DataCloudflareWorkerVersionsResultPlacement.builder()
    .build();
```


### DataCloudflareWorkerVersionsResultPlacementTarget <a name="DataCloudflareWorkerVersionsResultPlacementTarget" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTarget.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultPlacementTarget;

DataCloudflareWorkerVersionsResultPlacementTarget.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkerVersionsResultAnnotationsOutputReference <a name="DataCloudflareWorkerVersionsResultAnnotationsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference;

new DataCloudflareWorkerVersionsResultAnnotationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersMessage">workersMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTag">workersTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTriggeredBy">workersTriggeredBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations">DataCloudflareWorkerVersionsResultAnnotations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workersMessage`<sup>Required</sup> <a name="workersMessage" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersMessage"></a>

```java
public java.lang.String getWorkersMessage();
```

- *Type:* java.lang.String

---

##### `workersTag`<sup>Required</sup> <a name="workersTag" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTag"></a>

```java
public java.lang.String getWorkersTag();
```

- *Type:* java.lang.String

---

##### `workersTriggeredBy`<sup>Required</sup> <a name="workersTriggeredBy" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTriggeredBy"></a>

```java
public java.lang.String getWorkersTriggeredBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultAnnotations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations">DataCloudflareWorkerVersionsResultAnnotations</a>

---


### DataCloudflareWorkerVersionsResultAssetsConfigOutputReference <a name="DataCloudflareWorkerVersionsResultAssetsConfigOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference;

new DataCloudflareWorkerVersionsResultAssetsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.htmlHandling">htmlHandling</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.notFoundHandling">notFoundHandling</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.runWorkerFirst">runWorkerFirst</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig">DataCloudflareWorkerVersionsResultAssetsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `htmlHandling`<sup>Required</sup> <a name="htmlHandling" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.htmlHandling"></a>

```java
public java.lang.String getHtmlHandling();
```

- *Type:* java.lang.String

---

##### `notFoundHandling`<sup>Required</sup> <a name="notFoundHandling" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.notFoundHandling"></a>

```java
public java.lang.String getNotFoundHandling();
```

- *Type:* java.lang.String

---

##### `runWorkerFirst`<sup>Required</sup> <a name="runWorkerFirst" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.runWorkerFirst"></a>

```java
public java.util.List<java.lang.String> getRunWorkerFirst();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultAssetsConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig">DataCloudflareWorkerVersionsResultAssetsConfig</a>

---


### DataCloudflareWorkerVersionsResultAssetsOutputReference <a name="DataCloudflareWorkerVersionsResultAssetsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultAssetsOutputReference;

new DataCloudflareWorkerVersionsResultAssetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference">DataCloudflareWorkerVersionsResultAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.jwt">jwt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets">DataCloudflareWorkerVersionsResultAssets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.config"></a>

```java
public DataCloudflareWorkerVersionsResultAssetsConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference">DataCloudflareWorkerVersionsResultAssetsConfigOutputReference</a>

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.jwt"></a>

```java
public java.lang.String getJwt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultAssets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets">DataCloudflareWorkerVersionsResultAssets</a>

---


### DataCloudflareWorkerVersionsResultBindingsList <a name="DataCloudflareWorkerVersionsResultBindingsList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultBindingsList;

new DataCloudflareWorkerVersionsResultBindingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.get"></a>

```java
public DataCloudflareWorkerVersionsResultBindingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference <a name="DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference;

new DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.params">params</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList">DataCloudflareWorkerVersionsResultBindingsOutboundParamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.worker">worker</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound">DataCloudflareWorkerVersionsResultBindingsOutbound</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.params"></a>

```java
public DataCloudflareWorkerVersionsResultBindingsOutboundParamsList getParams();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList">DataCloudflareWorkerVersionsResultBindingsOutboundParamsList</a>

---

##### `worker`<sup>Required</sup> <a name="worker" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.worker"></a>

```java
public DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference getWorker();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultBindingsOutbound getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound">DataCloudflareWorkerVersionsResultBindingsOutbound</a>

---


### DataCloudflareWorkerVersionsResultBindingsOutboundParamsList <a name="DataCloudflareWorkerVersionsResultBindingsOutboundParamsList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList;

new DataCloudflareWorkerVersionsResultBindingsOutboundParamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.get"></a>

```java
public DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference <a name="DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference;

new DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParams">DataCloudflareWorkerVersionsResultBindingsOutboundParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultBindingsOutboundParams getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundParams">DataCloudflareWorkerVersionsResultBindingsOutboundParams</a>

---


### DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference <a name="DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference;

new DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.entrypoint">entrypoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker">DataCloudflareWorkerVersionsResultBindingsOutboundWorker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.entrypoint"></a>

```java
public java.lang.String getEntrypoint();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultBindingsOutboundWorker getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker">DataCloudflareWorkerVersionsResultBindingsOutboundWorker</a>

---


### DataCloudflareWorkerVersionsResultBindingsOutputReference <a name="DataCloudflareWorkerVersionsResultBindingsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultBindingsOutputReference;

new DataCloudflareWorkerVersionsResultBindingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.allowedDestinationAddresses">allowedDestinationAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.allowedSenderAddresses">allowedSenderAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.className">className</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.dispatchNamespace">dispatchNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.entrypoint">entrypoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.indexName">indexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.json">json</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.jurisdiction">jurisdiction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyBase64">keyBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyJwk">keyJwk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.networkId">networkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.oldName">oldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.outbound">outbound</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.part">part</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.pipeline">pipeline</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.queueName">queueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.scriptName">scriptName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.simple">simple</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference">DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.storeId">storeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.usages">usages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.workflowName">workflowName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings">DataCloudflareWorkerVersionsResultBindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `allowedDestinationAddresses`<sup>Required</sup> <a name="allowedDestinationAddresses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.allowedDestinationAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedDestinationAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedSenderAddresses`<sup>Required</sup> <a name="allowedSenderAddresses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.allowedSenderAddresses"></a>

```java
public java.util.List<java.lang.String> getAllowedSenderAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `className`<sup>Required</sup> <a name="className" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.className"></a>

```java
public java.lang.String getClassName();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.destinationAddress"></a>

```java
public java.lang.String getDestinationAddress();
```

- *Type:* java.lang.String

---

##### `dispatchNamespace`<sup>Required</sup> <a name="dispatchNamespace" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.dispatchNamespace"></a>

```java
public java.lang.String getDispatchNamespace();
```

- *Type:* java.lang.String

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.entrypoint"></a>

```java
public java.lang.String getEntrypoint();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.indexName"></a>

```java
public java.lang.String getIndexName();
```

- *Type:* java.lang.String

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.json"></a>

```java
public java.lang.String getJson();
```

- *Type:* java.lang.String

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.jurisdiction"></a>

```java
public java.lang.String getJurisdiction();
```

- *Type:* java.lang.String

---

##### `keyBase64`<sup>Required</sup> <a name="keyBase64" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyBase64"></a>

```java
public java.lang.String getKeyBase64();
```

- *Type:* java.lang.String

---

##### `keyJwk`<sup>Required</sup> <a name="keyJwk" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyJwk"></a>

```java
public java.lang.String getKeyJwk();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

---

##### `oldName`<sup>Required</sup> <a name="oldName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.oldName"></a>

```java
public java.lang.String getOldName();
```

- *Type:* java.lang.String

---

##### `outbound`<sup>Required</sup> <a name="outbound" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.outbound"></a>

```java
public DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference getOutbound();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference</a>

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.part"></a>

```java
public java.lang.String getPart();
```

- *Type:* java.lang.String

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.pipeline"></a>

```java
public java.lang.String getPipeline();
```

- *Type:* java.lang.String

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.scriptName"></a>

```java
public java.lang.String getScriptName();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `simple`<sup>Required</sup> <a name="simple" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.simple"></a>

```java
public DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference getSimple();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference">DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference</a>

---

##### `storeId`<sup>Required</sup> <a name="storeId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.storeId"></a>

```java
public java.lang.String getStoreId();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.usages"></a>

```java
public java.util.List<java.lang.String> getUsages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.workflowName"></a>

```java
public java.lang.String getWorkflowName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultBindings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings">DataCloudflareWorkerVersionsResultBindings</a>

---


### DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference <a name="DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference;

new DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.property.mitigationTimeout">mitigationTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimple">DataCloudflareWorkerVersionsResultBindingsSimple</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `mitigationTimeout`<sup>Required</sup> <a name="mitigationTimeout" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.property.mitigationTimeout"></a>

```java
public java.lang.Number getMitigationTimeout();
```

- *Type:* java.lang.Number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultBindingsSimple getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsSimple">DataCloudflareWorkerVersionsResultBindingsSimple</a>

---


### DataCloudflareWorkerVersionsResultContainersList <a name="DataCloudflareWorkerVersionsResultContainersList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultContainersList;

new DataCloudflareWorkerVersionsResultContainersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.get"></a>

```java
public DataCloudflareWorkerVersionsResultContainersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareWorkerVersionsResultContainersOutputReference <a name="DataCloudflareWorkerVersionsResultContainersOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultContainersOutputReference;

new DataCloudflareWorkerVersionsResultContainersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.property.className">className</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainers">DataCloudflareWorkerVersionsResultContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `className`<sup>Required</sup> <a name="className" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.property.className"></a>

```java
public java.lang.String getClassName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultContainers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainers">DataCloudflareWorkerVersionsResultContainers</a>

---


### DataCloudflareWorkerVersionsResultLimitsOutputReference <a name="DataCloudflareWorkerVersionsResultLimitsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultLimitsOutputReference;

new DataCloudflareWorkerVersionsResultLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.cpuMs">cpuMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.subrequests">subrequests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits">DataCloudflareWorkerVersionsResultLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuMs`<sup>Required</sup> <a name="cpuMs" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.cpuMs"></a>

```java
public java.lang.Number getCpuMs();
```

- *Type:* java.lang.Number

---

##### `subrequests`<sup>Required</sup> <a name="subrequests" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.subrequests"></a>

```java
public java.lang.Number getSubrequests();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultLimits getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits">DataCloudflareWorkerVersionsResultLimits</a>

---


### DataCloudflareWorkerVersionsResultList <a name="DataCloudflareWorkerVersionsResultList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultList;

new DataCloudflareWorkerVersionsResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.get"></a>

```java
public DataCloudflareWorkerVersionsResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareWorkerVersionsResultMigrationsOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsOutputReference;

new DataCloudflareWorkerVersionsResultMigrationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.deletedClasses">deletedClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newClasses">newClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newSqliteClasses">newSqliteClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newTag">newTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.oldTag">oldTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.renamedClasses">renamedClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList">DataCloudflareWorkerVersionsResultMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.transferredClasses">transferredClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations">DataCloudflareWorkerVersionsResultMigrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deletedClasses`<sup>Required</sup> <a name="deletedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.deletedClasses"></a>

```java
public java.util.List<java.lang.String> getDeletedClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newClasses`<sup>Required</sup> <a name="newClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newClasses"></a>

```java
public java.util.List<java.lang.String> getNewClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newSqliteClasses`<sup>Required</sup> <a name="newSqliteClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newSqliteClasses"></a>

```java
public java.util.List<java.lang.String> getNewSqliteClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newTag`<sup>Required</sup> <a name="newTag" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newTag"></a>

```java
public java.lang.String getNewTag();
```

- *Type:* java.lang.String

---

##### `oldTag`<sup>Required</sup> <a name="oldTag" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.oldTag"></a>

```java
public java.lang.String getOldTag();
```

- *Type:* java.lang.String

---

##### `renamedClasses`<sup>Required</sup> <a name="renamedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.renamedClasses"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList getRenamedClasses();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.steps"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsStepsList getSteps();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList">DataCloudflareWorkerVersionsResultMigrationsStepsList</a>

---

##### `transferredClasses`<sup>Required</sup> <a name="transferredClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.transferredClasses"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList getTransferredClasses();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultMigrations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations">DataCloudflareWorkerVersionsResultMigrations</a>

---


### DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList;

new DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.get"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference;

new DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsRenamedClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsRenamedClasses getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsRenamedClasses</a>

---


### DataCloudflareWorkerVersionsResultMigrationsStepsList <a name="DataCloudflareWorkerVersionsResultMigrationsStepsList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsStepsList;

new DataCloudflareWorkerVersionsResultMigrationsStepsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.get"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference;

new DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.deletedClasses">deletedClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newClasses">newClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newSqliteClasses">newSqliteClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.renamedClasses">renamedClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.transferredClasses">transferredClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps">DataCloudflareWorkerVersionsResultMigrationsSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deletedClasses`<sup>Required</sup> <a name="deletedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.deletedClasses"></a>

```java
public java.util.List<java.lang.String> getDeletedClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newClasses`<sup>Required</sup> <a name="newClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newClasses"></a>

```java
public java.util.List<java.lang.String> getNewClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newSqliteClasses`<sup>Required</sup> <a name="newSqliteClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```java
public java.util.List<java.lang.String> getNewSqliteClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `renamedClasses`<sup>Required</sup> <a name="renamedClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.renamedClasses"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList getRenamedClasses();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList</a>

---

##### `transferredClasses`<sup>Required</sup> <a name="transferredClasses" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.transferredClasses"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList getTransferredClasses();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsSteps getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps">DataCloudflareWorkerVersionsResultMigrationsSteps</a>

---


### DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList;

new DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.get"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference;

new DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses</a>

---


### DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList;

new DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.get"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference;

new DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fromScript">fromScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `fromScript`<sup>Required</sup> <a name="fromScript" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```java
public java.lang.String getFromScript();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses</a>

---


### DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList;

new DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.get"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference;

new DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fromScript">fromScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsTransferredClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `fromScript`<sup>Required</sup> <a name="fromScript" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```java
public java.lang.String getFromScript();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsTransferredClasses getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsTransferredClasses</a>

---


### DataCloudflareWorkerVersionsResultModulesList <a name="DataCloudflareWorkerVersionsResultModulesList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultModulesList;

new DataCloudflareWorkerVersionsResultModulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.get"></a>

```java
public DataCloudflareWorkerVersionsResultModulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareWorkerVersionsResultModulesOutputReference <a name="DataCloudflareWorkerVersionsResultModulesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultModulesOutputReference;

new DataCloudflareWorkerVersionsResultModulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentBase64">contentBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules">DataCloudflareWorkerVersionsResultModules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentBase64"></a>

```java
public java.lang.String getContentBase64();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultModules getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules">DataCloudflareWorkerVersionsResultModules</a>

---


### DataCloudflareWorkerVersionsResultOutputReference <a name="DataCloudflareWorkerVersionsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultOutputReference;

new DataCloudflareWorkerVersionsResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.annotations">annotations</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference">DataCloudflareWorkerVersionsResultAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.assets">assets</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference">DataCloudflareWorkerVersionsResultAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.bindings">bindings</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList">DataCloudflareWorkerVersionsResultBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityDate">compatibilityDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityFlags">compatibilityFlags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList">DataCloudflareWorkerVersionsResultContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference">DataCloudflareWorkerVersionsResultLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.mainModule">mainModule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.mainScriptBase64">mainScriptBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.migrations">migrations</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference">DataCloudflareWorkerVersionsResultMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.migrationTag">migrationTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.modules">modules</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList">DataCloudflareWorkerVersionsResultModulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.number">number</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference">DataCloudflareWorkerVersionsResultPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.startupTimeMs">startupTimeMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.urls">urls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.usageModel">usageModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult">DataCloudflareWorkerVersionsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.annotations"></a>

```java
public DataCloudflareWorkerVersionsResultAnnotationsOutputReference getAnnotations();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference">DataCloudflareWorkerVersionsResultAnnotationsOutputReference</a>

---

##### `assets`<sup>Required</sup> <a name="assets" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.assets"></a>

```java
public DataCloudflareWorkerVersionsResultAssetsOutputReference getAssets();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference">DataCloudflareWorkerVersionsResultAssetsOutputReference</a>

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.bindings"></a>

```java
public DataCloudflareWorkerVersionsResultBindingsList getBindings();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList">DataCloudflareWorkerVersionsResultBindingsList</a>

---

##### `compatibilityDate`<sup>Required</sup> <a name="compatibilityDate" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityDate"></a>

```java
public java.lang.String getCompatibilityDate();
```

- *Type:* java.lang.String

---

##### `compatibilityFlags`<sup>Required</sup> <a name="compatibilityFlags" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityFlags"></a>

```java
public java.util.List<java.lang.String> getCompatibilityFlags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.containers"></a>

```java
public DataCloudflareWorkerVersionsResultContainersList getContainers();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultContainersList">DataCloudflareWorkerVersionsResultContainersList</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.limits"></a>

```java
public DataCloudflareWorkerVersionsResultLimitsOutputReference getLimits();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference">DataCloudflareWorkerVersionsResultLimitsOutputReference</a>

---

##### `mainModule`<sup>Required</sup> <a name="mainModule" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.mainModule"></a>

```java
public java.lang.String getMainModule();
```

- *Type:* java.lang.String

---

##### `mainScriptBase64`<sup>Required</sup> <a name="mainScriptBase64" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.mainScriptBase64"></a>

```java
public java.lang.String getMainScriptBase64();
```

- *Type:* java.lang.String

---

##### `migrations`<sup>Required</sup> <a name="migrations" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.migrations"></a>

```java
public DataCloudflareWorkerVersionsResultMigrationsOutputReference getMigrations();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference">DataCloudflareWorkerVersionsResultMigrationsOutputReference</a>

---

##### `migrationTag`<sup>Required</sup> <a name="migrationTag" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.migrationTag"></a>

```java
public java.lang.String getMigrationTag();
```

- *Type:* java.lang.String

---

##### `modules`<sup>Required</sup> <a name="modules" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.modules"></a>

```java
public DataCloudflareWorkerVersionsResultModulesList getModules();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList">DataCloudflareWorkerVersionsResultModulesList</a>

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.number"></a>

```java
public java.lang.Number getNumber();
```

- *Type:* java.lang.Number

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.placement"></a>

```java
public DataCloudflareWorkerVersionsResultPlacementOutputReference getPlacement();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference">DataCloudflareWorkerVersionsResultPlacementOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `startupTimeMs`<sup>Required</sup> <a name="startupTimeMs" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.startupTimeMs"></a>

```java
public java.lang.Number getStartupTimeMs();
```

- *Type:* java.lang.Number

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.urls"></a>

```java
public java.util.List<java.lang.String> getUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usageModel`<sup>Required</sup> <a name="usageModel" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.usageModel"></a>

```java
public java.lang.String getUsageModel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult">DataCloudflareWorkerVersionsResult</a>

---


### DataCloudflareWorkerVersionsResultPlacementOutputReference <a name="DataCloudflareWorkerVersionsResultPlacementOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultPlacementOutputReference;

new DataCloudflareWorkerVersionsResultPlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList">DataCloudflareWorkerVersionsResultPlacementTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement">DataCloudflareWorkerVersionsResultPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.target"></a>

```java
public DataCloudflareWorkerVersionsResultPlacementTargetList getTarget();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList">DataCloudflareWorkerVersionsResultPlacementTargetList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultPlacement getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement">DataCloudflareWorkerVersionsResultPlacement</a>

---


### DataCloudflareWorkerVersionsResultPlacementTargetList <a name="DataCloudflareWorkerVersionsResultPlacementTargetList" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultPlacementTargetList;

new DataCloudflareWorkerVersionsResultPlacementTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.get"></a>

```java
public DataCloudflareWorkerVersionsResultPlacementTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareWorkerVersionsResultPlacementTargetOutputReference <a name="DataCloudflareWorkerVersionsResultPlacementTargetOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_worker_versions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference;

new DataCloudflareWorkerVersionsResultPlacementTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTarget">DataCloudflareWorkerVersionsResultPlacementTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTargetOutputReference.property.internalValue"></a>

```java
public DataCloudflareWorkerVersionsResultPlacementTarget getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementTarget">DataCloudflareWorkerVersionsResultPlacementTarget</a>

---




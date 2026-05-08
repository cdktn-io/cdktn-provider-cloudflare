# `dataCloudflareCloudforceOneRequestPriority` Submodule <a name="`dataCloudflareCloudforceOneRequestPriority` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCloudforceOneRequestPriority <a name="DataCloudflareCloudforceOneRequestPriority" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_cloudforce_one_request_priority.DataCloudflareCloudforceOneRequestPriority;

DataCloudflareCloudforceOneRequestPriority.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .priorityId(java.lang.String)
//  .accountId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.priorityId">priorityId</a></code> | <code>java.lang.String</code> | UUID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `priorityId`<sup>Required</sup> <a name="priorityId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.priorityId"></a>

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/cloudforce_one_request_priority#priority_id DataCloudflareCloudforceOneRequestPriority#priority_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/cloudforce_one_request_priority#account_id DataCloudflareCloudforceOneRequestPriority#account_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.resetAccountId"></a>

```java
public void resetAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareCloudforceOneRequestPriority resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_cloudforce_one_request_priority.DataCloudflareCloudforceOneRequestPriority;

DataCloudflareCloudforceOneRequestPriority.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_cloudforce_one_request_priority.DataCloudflareCloudforceOneRequestPriority;

DataCloudflareCloudforceOneRequestPriority.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_cloudforce_one_request_priority.DataCloudflareCloudforceOneRequestPriority;

DataCloudflareCloudforceOneRequestPriority.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_cloudforce_one_request_priority.DataCloudflareCloudforceOneRequestPriority;

DataCloudflareCloudforceOneRequestPriority.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareCloudforceOneRequestPriority.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareCloudforceOneRequestPriority resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareCloudforceOneRequestPriority to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareCloudforceOneRequestPriority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/cloudforce_one_request_priority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareCloudforceOneRequestPriority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.completed">completed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.messageTokens">messageTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.readableId">readableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.request">request</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.tlp">tlp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.tokens">tokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.updated">updated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.priorityIdInput">priorityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.priorityId">priorityId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `completed`<sup>Required</sup> <a name="completed" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.completed"></a>

```java
public java.lang.String getCompleted();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `messageTokens`<sup>Required</sup> <a name="messageTokens" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.messageTokens"></a>

```java
public java.lang.Number getMessageTokens();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `readableId`<sup>Required</sup> <a name="readableId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.readableId"></a>

```java
public java.lang.String getReadableId();
```

- *Type:* java.lang.String

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.request"></a>

```java
public java.lang.String getRequest();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `tlp`<sup>Required</sup> <a name="tlp" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.tlp"></a>

```java
public java.lang.String getTlp();
```

- *Type:* java.lang.String

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.tokens"></a>

```java
public java.lang.Number getTokens();
```

- *Type:* java.lang.Number

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.updated"></a>

```java
public java.lang.String getUpdated();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `priorityIdInput`<sup>Optional</sup> <a name="priorityIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.priorityIdInput"></a>

```java
public java.lang.String getPriorityIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `priorityId`<sup>Required</sup> <a name="priorityId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.priorityId"></a>

```java
public java.lang.String getPriorityId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriority.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCloudforceOneRequestPriorityConfig <a name="DataCloudflareCloudforceOneRequestPriorityConfig" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_cloudforce_one_request_priority.DataCloudflareCloudforceOneRequestPriorityConfig;

DataCloudflareCloudforceOneRequestPriorityConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .priorityId(java.lang.String)
//  .accountId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.priorityId">priorityId</a></code> | <code>java.lang.String</code> | UUID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `priorityId`<sup>Required</sup> <a name="priorityId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.priorityId"></a>

```java
public java.lang.String getPriorityId();
```

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/cloudforce_one_request_priority#priority_id DataCloudflareCloudforceOneRequestPriority#priority_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareCloudforceOneRequestPriority.DataCloudflareCloudforceOneRequestPriorityConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/cloudforce_one_request_priority#account_id DataCloudflareCloudforceOneRequestPriority#account_id}

---




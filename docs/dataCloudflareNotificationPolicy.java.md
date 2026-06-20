# `dataCloudflareNotificationPolicy` Submodule <a name="`dataCloudflareNotificationPolicy` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareNotificationPolicy <a name="DataCloudflareNotificationPolicy" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/notification_policy cloudflare_notification_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicy;

DataCloudflareNotificationPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .policyId(java.lang.String)
//  .accountId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | The unique identifier of a notification policy. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account id. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

The unique identifier of a notification policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/notification_policy#policy_id DataCloudflareNotificationPolicy#policy_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/notification_policy#account_id DataCloudflareNotificationPolicy#account_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.resetAccountId">resetAccountId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.resetAccountId"></a>

```java
public void resetAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareNotificationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicy;

DataCloudflareNotificationPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicy;

DataCloudflareNotificationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicy;

DataCloudflareNotificationPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicy;

DataCloudflareNotificationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareNotificationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareNotificationPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareNotificationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareNotificationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/notification_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareNotificationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.alertInterval">alertInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.alertType">alertType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference">DataCloudflareNotificationPolicyFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.mechanisms">mechanisms</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference">DataCloudflareNotificationPolicyMechanismsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.modified">modified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `alertInterval`<sup>Required</sup> <a name="alertInterval" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.alertInterval"></a>

```java
public java.lang.String getAlertInterval();
```

- *Type:* java.lang.String

---

##### `alertType`<sup>Required</sup> <a name="alertType" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.alertType"></a>

```java
public java.lang.String getAlertType();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.filters"></a>

```java
public DataCloudflareNotificationPolicyFiltersOutputReference getFilters();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference">DataCloudflareNotificationPolicyFiltersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mechanisms`<sup>Required</sup> <a name="mechanisms" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.mechanisms"></a>

```java
public DataCloudflareNotificationPolicyMechanismsOutputReference getMechanisms();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference">DataCloudflareNotificationPolicyMechanismsOutputReference</a>

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.modified"></a>

```java
public java.lang.String getModified();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareNotificationPolicyConfig <a name="DataCloudflareNotificationPolicyConfig" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicyConfig;

DataCloudflareNotificationPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .policyId(java.lang.String)
//  .accountId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | The unique identifier of a notification policy. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

The unique identifier of a notification policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/notification_policy#policy_id DataCloudflareNotificationPolicy#policy_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/notification_policy#account_id DataCloudflareNotificationPolicy#account_id}

---

### DataCloudflareNotificationPolicyFilters <a name="DataCloudflareNotificationPolicyFilters" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFilters.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicyFilters;

DataCloudflareNotificationPolicyFilters.builder()
    .build();
```


### DataCloudflareNotificationPolicyMechanisms <a name="DataCloudflareNotificationPolicyMechanisms" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanisms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanisms.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicyMechanisms;

DataCloudflareNotificationPolicyMechanisms.builder()
    .build();
```


### DataCloudflareNotificationPolicyMechanismsEmail <a name="DataCloudflareNotificationPolicyMechanismsEmail" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmail.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicyMechanismsEmail;

DataCloudflareNotificationPolicyMechanismsEmail.builder()
    .build();
```


### DataCloudflareNotificationPolicyMechanismsPagerduty <a name="DataCloudflareNotificationPolicyMechanismsPagerduty" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerduty.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicyMechanismsPagerduty;

DataCloudflareNotificationPolicyMechanismsPagerduty.builder()
    .build();
```


### DataCloudflareNotificationPolicyMechanismsWebhooks <a name="DataCloudflareNotificationPolicyMechanismsWebhooks" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooks.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicyMechanismsWebhooks;

DataCloudflareNotificationPolicyMechanismsWebhooks.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareNotificationPolicyFiltersOutputReference <a name="DataCloudflareNotificationPolicyFiltersOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicyFiltersOutputReference;

new DataCloudflareNotificationPolicyFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedAsns">affectedAsns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedComponents">affectedComponents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedLocations">affectedLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.airportCode">airportCode</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.alertTriggerPreferences">alertTriggerPreferences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValue">alertTriggerPreferencesValue</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.enabled">enabled</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.environment">environment</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.event">event</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.eventSource">eventSource</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.eventType">eventType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.healthCheckId">healthCheckId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.incidentImpact">incidentImpact</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.inputId">inputId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.insightClass">insightClass</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.limit">limit</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.logoTag">logoTag</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.megabitsPerSecond">megabitsPerSecond</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.newHealth">newHealth</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.newStatus">newStatus</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.packetsPerSecond">packetsPerSecond</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.poolId">poolId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.popNames">popNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.product">product</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.projectId">projectId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.protocol">protocol</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.queryTag">queryTag</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.requestsPerSecond">requestsPerSecond</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.selectors">selectors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.slo">slo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.status">status</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetHostname">targetHostname</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetIp">targetIp</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetZoneName">targetZoneName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.trafficExclusions">trafficExclusions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.tunnelId">tunnelId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.tunnelName">tunnelName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.type">type</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.where">where</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFilters">DataCloudflareNotificationPolicyFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `affectedAsns`<sup>Required</sup> <a name="affectedAsns" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedAsns"></a>

```java
public java.util.List<java.lang.String> getAffectedAsns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `affectedComponents`<sup>Required</sup> <a name="affectedComponents" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedComponents"></a>

```java
public java.util.List<java.lang.String> getAffectedComponents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `affectedLocations`<sup>Required</sup> <a name="affectedLocations" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.affectedLocations"></a>

```java
public java.util.List<java.lang.String> getAffectedLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `airportCode`<sup>Required</sup> <a name="airportCode" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.airportCode"></a>

```java
public java.util.List<java.lang.String> getAirportCode();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alertTriggerPreferences`<sup>Required</sup> <a name="alertTriggerPreferences" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.alertTriggerPreferences"></a>

```java
public java.util.List<java.lang.String> getAlertTriggerPreferences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alertTriggerPreferencesValue`<sup>Required</sup> <a name="alertTriggerPreferencesValue" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.alertTriggerPreferencesValue"></a>

```java
public java.util.List<java.lang.String> getAlertTriggerPreferencesValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.enabled"></a>

```java
public java.util.List<java.lang.String> getEnabled();
```

- *Type:* java.util.List<java.lang.String>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.environment"></a>

```java
public java.util.List<java.lang.String> getEnvironment();
```

- *Type:* java.util.List<java.lang.String>

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.event"></a>

```java
public java.util.List<java.lang.String> getEvent();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eventSource`<sup>Required</sup> <a name="eventSource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.eventSource"></a>

```java
public java.util.List<java.lang.String> getEventSource();
```

- *Type:* java.util.List<java.lang.String>

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.eventType"></a>

```java
public java.util.List<java.lang.String> getEventType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.healthCheckId"></a>

```java
public java.util.List<java.lang.String> getHealthCheckId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `incidentImpact`<sup>Required</sup> <a name="incidentImpact" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.incidentImpact"></a>

```java
public java.util.List<java.lang.String> getIncidentImpact();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inputId`<sup>Required</sup> <a name="inputId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.inputId"></a>

```java
public java.util.List<java.lang.String> getInputId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `insightClass`<sup>Required</sup> <a name="insightClass" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.insightClass"></a>

```java
public java.util.List<java.lang.String> getInsightClass();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.limit"></a>

```java
public java.util.List<java.lang.String> getLimit();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logoTag`<sup>Required</sup> <a name="logoTag" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.logoTag"></a>

```java
public java.util.List<java.lang.String> getLogoTag();
```

- *Type:* java.util.List<java.lang.String>

---

##### `megabitsPerSecond`<sup>Required</sup> <a name="megabitsPerSecond" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.megabitsPerSecond"></a>

```java
public java.util.List<java.lang.String> getMegabitsPerSecond();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newHealth`<sup>Required</sup> <a name="newHealth" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.newHealth"></a>

```java
public java.util.List<java.lang.String> getNewHealth();
```

- *Type:* java.util.List<java.lang.String>

---

##### `newStatus`<sup>Required</sup> <a name="newStatus" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.newStatus"></a>

```java
public java.util.List<java.lang.String> getNewStatus();
```

- *Type:* java.util.List<java.lang.String>

---

##### `packetsPerSecond`<sup>Required</sup> <a name="packetsPerSecond" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.packetsPerSecond"></a>

```java
public java.util.List<java.lang.String> getPacketsPerSecond();
```

- *Type:* java.util.List<java.lang.String>

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.poolId"></a>

```java
public java.util.List<java.lang.String> getPoolId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `popNames`<sup>Required</sup> <a name="popNames" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.popNames"></a>

```java
public java.util.List<java.lang.String> getPopNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.product"></a>

```java
public java.util.List<java.lang.String> getProduct();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.projectId"></a>

```java
public java.util.List<java.lang.String> getProjectId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.protocol"></a>

```java
public java.util.List<java.lang.String> getProtocol();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryTag`<sup>Required</sup> <a name="queryTag" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.queryTag"></a>

```java
public java.util.List<java.lang.String> getQueryTag();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestsPerSecond`<sup>Required</sup> <a name="requestsPerSecond" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.requestsPerSecond"></a>

```java
public java.util.List<java.lang.String> getRequestsPerSecond();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.selectors"></a>

```java
public java.util.List<java.lang.String> getSelectors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `slo`<sup>Required</sup> <a name="slo" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.slo"></a>

```java
public java.util.List<java.lang.String> getSlo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.status"></a>

```java
public java.util.List<java.lang.String> getStatus();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetHostname`<sup>Required</sup> <a name="targetHostname" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetHostname"></a>

```java
public java.util.List<java.lang.String> getTargetHostname();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetIp`<sup>Required</sup> <a name="targetIp" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetIp"></a>

```java
public java.util.List<java.lang.String> getTargetIp();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetZoneName`<sup>Required</sup> <a name="targetZoneName" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.targetZoneName"></a>

```java
public java.util.List<java.lang.String> getTargetZoneName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trafficExclusions`<sup>Required</sup> <a name="trafficExclusions" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.trafficExclusions"></a>

```java
public java.util.List<java.lang.String> getTrafficExclusions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.tunnelId"></a>

```java
public java.util.List<java.lang.String> getTunnelId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnelName`<sup>Required</sup> <a name="tunnelName" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.tunnelName"></a>

```java
public java.util.List<java.lang.String> getTunnelName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.type"></a>

```java
public java.util.List<java.lang.String> getType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.where"></a>

```java
public java.util.List<java.lang.String> getWhere();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFiltersOutputReference.property.internalValue"></a>

```java
public DataCloudflareNotificationPolicyFilters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyFilters">DataCloudflareNotificationPolicyFilters</a>

---


### DataCloudflareNotificationPolicyMechanismsEmailList <a name="DataCloudflareNotificationPolicyMechanismsEmailList" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicyMechanismsEmailList;

new DataCloudflareNotificationPolicyMechanismsEmailList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.get"></a>

```java
public DataCloudflareNotificationPolicyMechanismsEmailOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareNotificationPolicyMechanismsEmailOutputReference <a name="DataCloudflareNotificationPolicyMechanismsEmailOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference;

new DataCloudflareNotificationPolicyMechanismsEmailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmail">DataCloudflareNotificationPolicyMechanismsEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailOutputReference.property.internalValue"></a>

```java
public DataCloudflareNotificationPolicyMechanismsEmail getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmail">DataCloudflareNotificationPolicyMechanismsEmail</a>

---


### DataCloudflareNotificationPolicyMechanismsOutputReference <a name="DataCloudflareNotificationPolicyMechanismsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicyMechanismsOutputReference;

new DataCloudflareNotificationPolicyMechanismsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.email">email</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList">DataCloudflareNotificationPolicyMechanismsEmailList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList">DataCloudflareNotificationPolicyMechanismsPagerdutyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.webhooks">webhooks</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList">DataCloudflareNotificationPolicyMechanismsWebhooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanisms">DataCloudflareNotificationPolicyMechanisms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.email"></a>

```java
public DataCloudflareNotificationPolicyMechanismsEmailList getEmail();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsEmailList">DataCloudflareNotificationPolicyMechanismsEmailList</a>

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.pagerduty"></a>

```java
public DataCloudflareNotificationPolicyMechanismsPagerdutyList getPagerduty();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList">DataCloudflareNotificationPolicyMechanismsPagerdutyList</a>

---

##### `webhooks`<sup>Required</sup> <a name="webhooks" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.webhooks"></a>

```java
public DataCloudflareNotificationPolicyMechanismsWebhooksList getWebhooks();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList">DataCloudflareNotificationPolicyMechanismsWebhooksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsOutputReference.property.internalValue"></a>

```java
public DataCloudflareNotificationPolicyMechanisms getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanisms">DataCloudflareNotificationPolicyMechanisms</a>

---


### DataCloudflareNotificationPolicyMechanismsPagerdutyList <a name="DataCloudflareNotificationPolicyMechanismsPagerdutyList" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicyMechanismsPagerdutyList;

new DataCloudflareNotificationPolicyMechanismsPagerdutyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.get"></a>

```java
public DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference <a name="DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference;

new DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerduty">DataCloudflareNotificationPolicyMechanismsPagerduty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerdutyOutputReference.property.internalValue"></a>

```java
public DataCloudflareNotificationPolicyMechanismsPagerduty getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsPagerduty">DataCloudflareNotificationPolicyMechanismsPagerduty</a>

---


### DataCloudflareNotificationPolicyMechanismsWebhooksList <a name="DataCloudflareNotificationPolicyMechanismsWebhooksList" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicyMechanismsWebhooksList;

new DataCloudflareNotificationPolicyMechanismsWebhooksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.get"></a>

```java
public DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference <a name="DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_notification_policy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference;

new DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooks">DataCloudflareNotificationPolicyMechanismsWebhooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooksOutputReference.property.internalValue"></a>

```java
public DataCloudflareNotificationPolicyMechanismsWebhooks getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareNotificationPolicy.DataCloudflareNotificationPolicyMechanismsWebhooks">DataCloudflareNotificationPolicyMechanismsWebhooks</a>

---




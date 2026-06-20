# `dataCloudflareWaitingRoom` Submodule <a name="`dataCloudflareWaitingRoom` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWaitingRoom <a name="DataCloudflareWaitingRoom" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/waiting_room cloudflare_waiting_room}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room.DataCloudflareWaitingRoom;

DataCloudflareWaitingRoom.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .waitingRoomId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.waitingRoomId">waitingRoomId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/waiting_room#waiting_room_id DataCloudflareWaitingRoom#waiting_room_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `waitingRoomId`<sup>Required</sup> <a name="waitingRoomId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.waitingRoomId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/waiting_room#waiting_room_id DataCloudflareWaitingRoom#waiting_room_id}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/waiting_room#zone_id DataCloudflareWaitingRoom#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareWaitingRoom resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room.DataCloudflareWaitingRoom;

DataCloudflareWaitingRoom.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room.DataCloudflareWaitingRoom;

DataCloudflareWaitingRoom.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room.DataCloudflareWaitingRoom;

DataCloudflareWaitingRoom.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room.DataCloudflareWaitingRoom;

DataCloudflareWaitingRoom.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareWaitingRoom.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareWaitingRoom resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareWaitingRoom to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareWaitingRoom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/waiting_room#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareWaitingRoom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.additionalRoutes">additionalRoutes</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList">DataCloudflareWaitingRoomAdditionalRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cookieAttributes">cookieAttributes</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference">DataCloudflareWaitingRoomCookieAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cookieSuffix">cookieSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.customPageHtml">customPageHtml</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.defaultTemplateLanguage">defaultTemplateLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.disableSessionRenewal">disableSessionRenewal</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.enabledOriginCommands">enabledOriginCommands</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.jsonResponseEnabled">jsonResponseEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.newUsersPerMinute">newUsersPerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.nextEventPrequeueStartTime">nextEventPrequeueStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.nextEventStartTime">nextEventStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueAll">queueAll</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueingMethod">queueingMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueingStatusCode">queueingStatusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.suspended">suspended</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.totalActiveUsers">totalActiveUsers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.turnstileAction">turnstileAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.turnstileMode">turnstileMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.waitingRoomIdInput">waitingRoomIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.waitingRoomId">waitingRoomId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `additionalRoutes`<sup>Required</sup> <a name="additionalRoutes" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.additionalRoutes"></a>

```java
public DataCloudflareWaitingRoomAdditionalRoutesList getAdditionalRoutes();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList">DataCloudflareWaitingRoomAdditionalRoutesList</a>

---

##### `cookieAttributes`<sup>Required</sup> <a name="cookieAttributes" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cookieAttributes"></a>

```java
public DataCloudflareWaitingRoomCookieAttributesOutputReference getCookieAttributes();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference">DataCloudflareWaitingRoomCookieAttributesOutputReference</a>

---

##### `cookieSuffix`<sup>Required</sup> <a name="cookieSuffix" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.cookieSuffix"></a>

```java
public java.lang.String getCookieSuffix();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `customPageHtml`<sup>Required</sup> <a name="customPageHtml" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.customPageHtml"></a>

```java
public java.lang.String getCustomPageHtml();
```

- *Type:* java.lang.String

---

##### `defaultTemplateLanguage`<sup>Required</sup> <a name="defaultTemplateLanguage" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.defaultTemplateLanguage"></a>

```java
public java.lang.String getDefaultTemplateLanguage();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableSessionRenewal`<sup>Required</sup> <a name="disableSessionRenewal" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.disableSessionRenewal"></a>

```java
public IResolvable getDisableSessionRenewal();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `enabledOriginCommands`<sup>Required</sup> <a name="enabledOriginCommands" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.enabledOriginCommands"></a>

```java
public java.util.List<java.lang.String> getEnabledOriginCommands();
```

- *Type:* java.util.List<java.lang.String>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jsonResponseEnabled`<sup>Required</sup> <a name="jsonResponseEnabled" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.jsonResponseEnabled"></a>

```java
public IResolvable getJsonResponseEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `newUsersPerMinute`<sup>Required</sup> <a name="newUsersPerMinute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.newUsersPerMinute"></a>

```java
public java.lang.Number getNewUsersPerMinute();
```

- *Type:* java.lang.Number

---

##### `nextEventPrequeueStartTime`<sup>Required</sup> <a name="nextEventPrequeueStartTime" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.nextEventPrequeueStartTime"></a>

```java
public java.lang.String getNextEventPrequeueStartTime();
```

- *Type:* java.lang.String

---

##### `nextEventStartTime`<sup>Required</sup> <a name="nextEventStartTime" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.nextEventStartTime"></a>

```java
public java.lang.String getNextEventStartTime();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `queueAll`<sup>Required</sup> <a name="queueAll" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueAll"></a>

```java
public IResolvable getQueueAll();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `queueingMethod`<sup>Required</sup> <a name="queueingMethod" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueingMethod"></a>

```java
public java.lang.String getQueueingMethod();
```

- *Type:* java.lang.String

---

##### `queueingStatusCode`<sup>Required</sup> <a name="queueingStatusCode" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.queueingStatusCode"></a>

```java
public java.lang.Number getQueueingStatusCode();
```

- *Type:* java.lang.Number

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.sessionDuration"></a>

```java
public java.lang.Number getSessionDuration();
```

- *Type:* java.lang.Number

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.suspended"></a>

```java
public IResolvable getSuspended();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `totalActiveUsers`<sup>Required</sup> <a name="totalActiveUsers" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.totalActiveUsers"></a>

```java
public java.lang.Number getTotalActiveUsers();
```

- *Type:* java.lang.Number

---

##### `turnstileAction`<sup>Required</sup> <a name="turnstileAction" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.turnstileAction"></a>

```java
public java.lang.String getTurnstileAction();
```

- *Type:* java.lang.String

---

##### `turnstileMode`<sup>Required</sup> <a name="turnstileMode" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.turnstileMode"></a>

```java
public java.lang.String getTurnstileMode();
```

- *Type:* java.lang.String

---

##### `waitingRoomIdInput`<sup>Optional</sup> <a name="waitingRoomIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.waitingRoomIdInput"></a>

```java
public java.lang.String getWaitingRoomIdInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `waitingRoomId`<sup>Required</sup> <a name="waitingRoomId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.waitingRoomId"></a>

```java
public java.lang.String getWaitingRoomId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoom.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWaitingRoomAdditionalRoutes <a name="DataCloudflareWaitingRoomAdditionalRoutes" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutes.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room.DataCloudflareWaitingRoomAdditionalRoutes;

DataCloudflareWaitingRoomAdditionalRoutes.builder()
    .build();
```


### DataCloudflareWaitingRoomConfig <a name="DataCloudflareWaitingRoomConfig" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room.DataCloudflareWaitingRoomConfig;

DataCloudflareWaitingRoomConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .waitingRoomId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.waitingRoomId">waitingRoomId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/waiting_room#waiting_room_id DataCloudflareWaitingRoom#waiting_room_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `waitingRoomId`<sup>Required</sup> <a name="waitingRoomId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.waitingRoomId"></a>

```java
public java.lang.String getWaitingRoomId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/waiting_room#waiting_room_id DataCloudflareWaitingRoom#waiting_room_id}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/waiting_room#zone_id DataCloudflareWaitingRoom#zone_id}

---

### DataCloudflareWaitingRoomCookieAttributes <a name="DataCloudflareWaitingRoomCookieAttributes" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributes.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room.DataCloudflareWaitingRoomCookieAttributes;

DataCloudflareWaitingRoomCookieAttributes.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWaitingRoomAdditionalRoutesList <a name="DataCloudflareWaitingRoomAdditionalRoutesList" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room.DataCloudflareWaitingRoomAdditionalRoutesList;

new DataCloudflareWaitingRoomAdditionalRoutesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.get"></a>

```java
public DataCloudflareWaitingRoomAdditionalRoutesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareWaitingRoomAdditionalRoutesOutputReference <a name="DataCloudflareWaitingRoomAdditionalRoutesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room.DataCloudflareWaitingRoomAdditionalRoutesOutputReference;

new DataCloudflareWaitingRoomAdditionalRoutesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutes">DataCloudflareWaitingRoomAdditionalRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutesOutputReference.property.internalValue"></a>

```java
public DataCloudflareWaitingRoomAdditionalRoutes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomAdditionalRoutes">DataCloudflareWaitingRoomAdditionalRoutes</a>

---


### DataCloudflareWaitingRoomCookieAttributesOutputReference <a name="DataCloudflareWaitingRoomCookieAttributesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room.DataCloudflareWaitingRoomCookieAttributesOutputReference;

new DataCloudflareWaitingRoomCookieAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.samesite">samesite</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.secure">secure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributes">DataCloudflareWaitingRoomCookieAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `samesite`<sup>Required</sup> <a name="samesite" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.samesite"></a>

```java
public java.lang.String getSamesite();
```

- *Type:* java.lang.String

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.secure"></a>

```java
public java.lang.String getSecure();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributesOutputReference.property.internalValue"></a>

```java
public DataCloudflareWaitingRoomCookieAttributes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoom.DataCloudflareWaitingRoomCookieAttributes">DataCloudflareWaitingRoomCookieAttributes</a>

---




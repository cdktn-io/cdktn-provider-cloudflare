# `dataCloudflareWaitingRoomEvent` Submodule <a name="`dataCloudflareWaitingRoomEvent` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWaitingRoomEvent <a name="DataCloudflareWaitingRoomEvent" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/waiting_room_event cloudflare_waiting_room_event}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room_event.DataCloudflareWaitingRoomEvent;

DataCloudflareWaitingRoomEvent.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .eventId(java.lang.String)
    .waitingRoomId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.eventId">eventId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/waiting_room_event#event_id DataCloudflareWaitingRoomEvent#event_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.waitingRoomId">waitingRoomId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/waiting_room_event#waiting_room_id DataCloudflareWaitingRoomEvent#waiting_room_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `eventId`<sup>Required</sup> <a name="eventId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.eventId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/waiting_room_event#event_id DataCloudflareWaitingRoomEvent#event_id}.

---

##### `waitingRoomId`<sup>Required</sup> <a name="waitingRoomId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.waitingRoomId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/waiting_room_event#waiting_room_id DataCloudflareWaitingRoomEvent#waiting_room_id}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/waiting_room_event#zone_id DataCloudflareWaitingRoomEvent#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareWaitingRoomEvent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room_event.DataCloudflareWaitingRoomEvent;

DataCloudflareWaitingRoomEvent.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room_event.DataCloudflareWaitingRoomEvent;

DataCloudflareWaitingRoomEvent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room_event.DataCloudflareWaitingRoomEvent;

DataCloudflareWaitingRoomEvent.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room_event.DataCloudflareWaitingRoomEvent;

DataCloudflareWaitingRoomEvent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareWaitingRoomEvent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareWaitingRoomEvent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareWaitingRoomEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareWaitingRoomEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/waiting_room_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareWaitingRoomEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.customPageHtml">customPageHtml</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.disableSessionRenewal">disableSessionRenewal</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventEndTime">eventEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventStartTime">eventStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.newUsersPerMinute">newUsersPerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.prequeueStartTime">prequeueStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.queueingMethod">queueingMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.sessionDuration">sessionDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.shuffleAtEventStart">shuffleAtEventStart</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.suspended">suspended</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.totalActiveUsers">totalActiveUsers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.turnstileAction">turnstileAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.turnstileMode">turnstileMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventIdInput">eventIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.waitingRoomIdInput">waitingRoomIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventId">eventId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.waitingRoomId">waitingRoomId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `customPageHtml`<sup>Required</sup> <a name="customPageHtml" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.customPageHtml"></a>

```java
public java.lang.String getCustomPageHtml();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableSessionRenewal`<sup>Required</sup> <a name="disableSessionRenewal" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.disableSessionRenewal"></a>

```java
public IResolvable getDisableSessionRenewal();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `eventEndTime`<sup>Required</sup> <a name="eventEndTime" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventEndTime"></a>

```java
public java.lang.String getEventEndTime();
```

- *Type:* java.lang.String

---

##### `eventStartTime`<sup>Required</sup> <a name="eventStartTime" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventStartTime"></a>

```java
public java.lang.String getEventStartTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `newUsersPerMinute`<sup>Required</sup> <a name="newUsersPerMinute" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.newUsersPerMinute"></a>

```java
public java.lang.Number getNewUsersPerMinute();
```

- *Type:* java.lang.Number

---

##### `prequeueStartTime`<sup>Required</sup> <a name="prequeueStartTime" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.prequeueStartTime"></a>

```java
public java.lang.String getPrequeueStartTime();
```

- *Type:* java.lang.String

---

##### `queueingMethod`<sup>Required</sup> <a name="queueingMethod" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.queueingMethod"></a>

```java
public java.lang.String getQueueingMethod();
```

- *Type:* java.lang.String

---

##### `sessionDuration`<sup>Required</sup> <a name="sessionDuration" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.sessionDuration"></a>

```java
public java.lang.Number getSessionDuration();
```

- *Type:* java.lang.Number

---

##### `shuffleAtEventStart`<sup>Required</sup> <a name="shuffleAtEventStart" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.shuffleAtEventStart"></a>

```java
public IResolvable getShuffleAtEventStart();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.suspended"></a>

```java
public IResolvable getSuspended();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `totalActiveUsers`<sup>Required</sup> <a name="totalActiveUsers" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.totalActiveUsers"></a>

```java
public java.lang.Number getTotalActiveUsers();
```

- *Type:* java.lang.Number

---

##### `turnstileAction`<sup>Required</sup> <a name="turnstileAction" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.turnstileAction"></a>

```java
public java.lang.String getTurnstileAction();
```

- *Type:* java.lang.String

---

##### `turnstileMode`<sup>Required</sup> <a name="turnstileMode" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.turnstileMode"></a>

```java
public java.lang.String getTurnstileMode();
```

- *Type:* java.lang.String

---

##### `eventIdInput`<sup>Optional</sup> <a name="eventIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventIdInput"></a>

```java
public java.lang.String getEventIdInput();
```

- *Type:* java.lang.String

---

##### `waitingRoomIdInput`<sup>Optional</sup> <a name="waitingRoomIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.waitingRoomIdInput"></a>

```java
public java.lang.String getWaitingRoomIdInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `eventId`<sup>Required</sup> <a name="eventId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventId"></a>

```java
public java.lang.String getEventId();
```

- *Type:* java.lang.String

---

##### `waitingRoomId`<sup>Required</sup> <a name="waitingRoomId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.waitingRoomId"></a>

```java
public java.lang.String getWaitingRoomId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWaitingRoomEventConfig <a name="DataCloudflareWaitingRoomEventConfig" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_waiting_room_event.DataCloudflareWaitingRoomEventConfig;

DataCloudflareWaitingRoomEventConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .eventId(java.lang.String)
    .waitingRoomId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.eventId">eventId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/waiting_room_event#event_id DataCloudflareWaitingRoomEvent#event_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.waitingRoomId">waitingRoomId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/waiting_room_event#waiting_room_id DataCloudflareWaitingRoomEvent#waiting_room_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `eventId`<sup>Required</sup> <a name="eventId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.eventId"></a>

```java
public java.lang.String getEventId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/waiting_room_event#event_id DataCloudflareWaitingRoomEvent#event_id}.

---

##### `waitingRoomId`<sup>Required</sup> <a name="waitingRoomId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.waitingRoomId"></a>

```java
public java.lang.String getWaitingRoomId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/waiting_room_event#waiting_room_id DataCloudflareWaitingRoomEvent#waiting_room_id}.

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/waiting_room_event#zone_id DataCloudflareWaitingRoomEvent#zone_id}

---




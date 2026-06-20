# `dataCloudflareLoadBalancerMonitorGroup` Submodule <a name="`dataCloudflareLoadBalancerMonitorGroup` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLoadBalancerMonitorGroup <a name="DataCloudflareLoadBalancerMonitorGroup" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/load_balancer_monitor_group cloudflare_load_balancer_monitor_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_group.DataCloudflareLoadBalancerMonitorGroup;

DataCloudflareLoadBalancerMonitorGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .monitorGroupId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.monitorGroupId">monitorGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/load_balancer_monitor_group#monitor_group_id DataCloudflareLoadBalancerMonitorGroup#monitor_group_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/load_balancer_monitor_group#account_id DataCloudflareLoadBalancerMonitorGroup#account_id}

---

##### `monitorGroupId`<sup>Required</sup> <a name="monitorGroupId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.Initializer.parameter.monitorGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/load_balancer_monitor_group#monitor_group_id DataCloudflareLoadBalancerMonitorGroup#monitor_group_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareLoadBalancerMonitorGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_group.DataCloudflareLoadBalancerMonitorGroup;

DataCloudflareLoadBalancerMonitorGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_group.DataCloudflareLoadBalancerMonitorGroup;

DataCloudflareLoadBalancerMonitorGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_group.DataCloudflareLoadBalancerMonitorGroup;

DataCloudflareLoadBalancerMonitorGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_group.DataCloudflareLoadBalancerMonitorGroup;

DataCloudflareLoadBalancerMonitorGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareLoadBalancerMonitorGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareLoadBalancerMonitorGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareLoadBalancerMonitorGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareLoadBalancerMonitorGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/load_balancer_monitor_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareLoadBalancerMonitorGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.members">members</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList">DataCloudflareLoadBalancerMonitorGroupMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.monitorGroupIdInput">monitorGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.monitorGroupId">monitorGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.members"></a>

```java
public DataCloudflareLoadBalancerMonitorGroupMembersList getMembers();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList">DataCloudflareLoadBalancerMonitorGroupMembersList</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `monitorGroupIdInput`<sup>Optional</sup> <a name="monitorGroupIdInput" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.monitorGroupIdInput"></a>

```java
public java.lang.String getMonitorGroupIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `monitorGroupId`<sup>Required</sup> <a name="monitorGroupId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.monitorGroupId"></a>

```java
public java.lang.String getMonitorGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLoadBalancerMonitorGroupConfig <a name="DataCloudflareLoadBalancerMonitorGroupConfig" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_group.DataCloudflareLoadBalancerMonitorGroupConfig;

DataCloudflareLoadBalancerMonitorGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .monitorGroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.monitorGroupId">monitorGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/load_balancer_monitor_group#monitor_group_id DataCloudflareLoadBalancerMonitorGroup#monitor_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/load_balancer_monitor_group#account_id DataCloudflareLoadBalancerMonitorGroup#account_id}

---

##### `monitorGroupId`<sup>Required</sup> <a name="monitorGroupId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupConfig.property.monitorGroupId"></a>

```java
public java.lang.String getMonitorGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/load_balancer_monitor_group#monitor_group_id DataCloudflareLoadBalancerMonitorGroup#monitor_group_id}.

---

### DataCloudflareLoadBalancerMonitorGroupMembers <a name="DataCloudflareLoadBalancerMonitorGroupMembers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembers.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_group.DataCloudflareLoadBalancerMonitorGroupMembers;

DataCloudflareLoadBalancerMonitorGroupMembers.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLoadBalancerMonitorGroupMembersList <a name="DataCloudflareLoadBalancerMonitorGroupMembersList" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_group.DataCloudflareLoadBalancerMonitorGroupMembersList;

new DataCloudflareLoadBalancerMonitorGroupMembersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.get"></a>

```java
public DataCloudflareLoadBalancerMonitorGroupMembersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareLoadBalancerMonitorGroupMembersOutputReference <a name="DataCloudflareLoadBalancerMonitorGroupMembersOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_load_balancer_monitor_group.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference;

new DataCloudflareLoadBalancerMonitorGroupMembersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.monitorId">monitorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnly">monitoringOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthy">mustBeHealthy</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembers">DataCloudflareLoadBalancerMonitorGroupMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.monitorId"></a>

```java
public java.lang.String getMonitorId();
```

- *Type:* java.lang.String

---

##### `monitoringOnly`<sup>Required</sup> <a name="monitoringOnly" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnly"></a>

```java
public IResolvable getMonitoringOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `mustBeHealthy`<sup>Required</sup> <a name="mustBeHealthy" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthy"></a>

```java
public IResolvable getMustBeHealthy();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembersOutputReference.property.internalValue"></a>

```java
public DataCloudflareLoadBalancerMonitorGroupMembers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareLoadBalancerMonitorGroup.DataCloudflareLoadBalancerMonitorGroupMembers">DataCloudflareLoadBalancerMonitorGroupMembers</a>

---



